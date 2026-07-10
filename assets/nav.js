const NAV_ITEMS = [
  { label: 'Project Overview', href: 'index.html', num: '' },
  { label: 'Investor Deck', href: 'investor.html', num: '✦' },
  { label: 'divider' },
  { label: 'DoD Deliverables', type: 'heading' },
  { label: 'Systems Thinking', href: 'systems-thinking.html', num: '1' },
  { label: 'Operational Concept', href: 'opscon.html', num: '' },
  { label: 'Requirements (SRS)', href: 'srs.html', num: '2' },
  { label: 'Architecture', href: 'architecture.html', num: '3' },
  { label: 'State Machine', href: 'state-machine.html', num: '✦' },
  { label: 'System Design', href: 'design.html', num: '4' },
  { label: 'HMI Prototype', href: 'hmi.html', num: '✦' },
  { label: 'Cloud Ops Dashboard', href: 'cloudops-wrapper.html', num: '✦' },
  { label: 'Analysis & FMECA', href: 'analysis.html', num: '5' },
  { label: 'Implementation', href: 'implementation.html', num: '6' },
  { label: 'BIV Schedule', href: 'schedule.html', num: '' },
  { label: 'Integration & ICD', href: 'integration.html', num: '7' },
  { label: 'V&V Plan', href: 'vvp.html', num: '8' },
  { label: 'Safety Analysis', href: 'safety.html', num: '9' },
  { label: 'HAZID Register', href: 'hazid.html', num: '' },
  { label: 'Transition Plan', href: 'transition.html', num: '' },
  { label: 'IPS Plan', href: 'ips.html', num: '10' },
  { label: 'OTA Firmware Spec', href: 'ota-firmware.html', num: '' },
  { label: 'RCM2 FMEA', href: 'rcm2-fmea.html', num: '' },
  { label: 'Disposal Plan', href: 'disposal.html', num: '11' },
  { label: 'divider' },
  { label: 'Reference', type: 'heading' },
  { label: 'Supporting Documents', href: 'supporting-docs.html', num: '' },
  { label: 'Market Trade Study', href: 'trade-study.html', num: '' },
  { label: 'Definitions & Acronyms', href: 'definitions.html', num: '' },
  { label: 'Assumptions & Deps', href: 'assumptions.html', num: '' },
  { label: 'Operating Environment', href: 'operating-environment.html', num: '' },
  { label: 'Useful Links', href: 'useful-links.html', num: '' },
  { label: 'Glossary of Terms', href: 'glossary.html', num: '' },
];

function buildNav(currentPage) {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  let html = `
    <div class="sidebar-logo">
      <div class="logo-mark">CoffCo</div>
      <div class="logo-sub">Systems Engineering Portfolio</div>
    </div>`;

  NAV_ITEMS.forEach(item => {
    if (item.label === 'divider') {
      html += `<div class="sidebar-divider"></div>`;
    } else if (item.type === 'heading') {
      html += `<div class="sidebar-section-label">${item.label}</div>`;
    } else {
      const active = currentPage && item.href === currentPage ? 'active' : '';
      const numEl = item.num
        ? `<span class="nav-num">${item.num}</span>`
        : `<span class="nav-num" style="background:transparent;"></span>`;
      html += `<a href="${item.href}" class="${active}">${numEl}${item.label}</a>`;
    }
  });

  sidebar.innerHTML = html;
}

// Highlight active nav item automatically
document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  buildNav(page);
});
