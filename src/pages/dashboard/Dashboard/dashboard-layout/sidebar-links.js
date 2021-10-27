export const agencySidebarLinks = [
  {
    title: 'Explore',
    icon: 'bi bi-bar-chart',
    url: '/petitions',
    extraClass: 'text-primary',
  },
  {
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    url: '/agency',
    exact: true,
  },
  {
    title: 'Mentions',
    icon: 'bi bi-at',
    url: '/agency/mentions',
  },
  {
    title: 'Petitions',
    icon: 'bi bi-ui-checks-grid',
    url: '/agency/petitions/id',
  },
];

export const adminSidebarLinks = [
  {
    title: 'Explore',
    icon: 'bi bi-bar-chart',
    url: '/petitions',
    extraClass: 'text-primary',
  },
  {
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    url: '/admin',
    exact: true,
  },
  {
    title: 'New Agency',
    icon: 'bi bi-person-plus',
    url: '/admin/agency/new',
  },
  {
    title: 'Agencies',
    icon: 'bi bi-people',
    url: '/admin/agencies',
  },
  {
    title: 'Petitions',
    icon: 'bi bi-ui-checks-grid',
    url: '/admin/petitions/id',
  },
];
