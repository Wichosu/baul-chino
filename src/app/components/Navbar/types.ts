export type NavContent = {
  href: string;
  title: string;
  description: string;
};

export type NavItem = {
  type: 'trigger';
  trigger: string;
  content: NavContent[];
};
