export type INavLinks = {
  title: string;
  href: string;
};

export type ISectionNamesFloat = {
  href: string;
  currentSection: Array<{
    link: string;
    path: string;
  }>;
};

export type ITabsData = {
  title: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
    description: string;
  }>;
};
