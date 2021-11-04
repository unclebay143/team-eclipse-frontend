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
    url: '/agency/petitions',
  },
  {
    title: 'Agent Form',
    icon: 'bi bi-person-plus',
    url: '/agency/agent_form',
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
    title: 'Petitions',
    icon: 'bi bi-ui-checks-grid',
    url: '/admin/petitions/id',
  },
  {
    title: 'Agencies',
    icon: 'bi bi-people',
    url: '/admin/agencies',
  },
  {
    title: 'New Agency',
    icon: 'bi bi-person-plus',
    url: '/admin/agency/new',
  },
  {
    title: 'New Admn',
    icon: 'bi bi-people',
    url: '/admin/new_admin',
  },
  {
    title: 'Hall of Shame',
    icon: 'bi bi-arrow-up-right',
    url: '/admin/create_hall_of_shame',
  },
];
