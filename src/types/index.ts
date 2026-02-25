import * as React from "react";

export type VisuallyHiddenPropsType = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"span">;

export interface TitlePropsType extends React.HTMLAttributes<HTMLElement> {
  level: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
}

export type InputsPropsType = {
  id?: string;
  label?: string;
  type: "text" | "email";
} & React.ComponentPropsWithoutRef<"input">;

export type FormPropsType = React.ComponentPropsWithoutRef<"form"> & {
  children: React.ReactNode;
};

export interface SkiptToContentsPropsType {
  classNames: string;
}

export type ContainerPropsTypes<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export type ListPropsType<Item, As extends React.ElementType> = {
  items: Item[];
  renderItem: (item: Item) => React.ReactNode;
  as?: As;
};

export type MarqueePropsType = {
  marqueeText: string[];
  title?: string;
};

export type NavbarMobilePropsType = {
  isOpen: boolean;
  handleClick: () => void;
};

export type HamburgerMenuPropsType = {
  isOpen: boolean;
  onClick: () => void;
  classNames?: string;
};

export type IconPropsType = {
  fill?: string;
} & React.ComponentPropsWithoutRef<"svg">;

export type CardPropsType = {
  children: React.ReactNode;
  classNames?: string;
} & React.ComponentPropsWithoutRef<"div">;

export type FrontmatterType = {
  id: number;
  title: string;
  name: string;
  episode: number;
  image: string;
  cover_image: string;
  author_image: string;
  hero_image: string;
  date: string;
  job?: string;
  city?: string;
  author?: string;
  duration?: string;
  read_time?: string;
  tag?: string;
  preview?: string;
  articles?: Array<{
    id: number;
    title: string;
    link: string;
    read_time: string;
    cover_image: string;
    date: string;
  }>;
};

export type ArticleDataType = {
  frontmatter: FrontmatterType;
  content: string;
  slug: string;
};

export type HeadlinePropsType = {
  imageSrc: string;
  altText: string;
};

export type DateFormatterPropsType = {
  dateString: string;
};

export type AuthorSummaryCardPropsType = {
  imageSrc: string;
  authorName: string;
  authorJob: string | undefined;
  authorCity: string | undefined;
  authorSlug: string;
};

export type SyngleNavPropsType = {
  goBackHref: string;
  title: string;
};

export type AuthorSideBarPropsType = {
  imageSrc: string;
  authorJob: string | undefined;
  authorCity: string | undefined;
  authorName: string;
  authorSocials: {
    id: string;
    Icon: React.FC<IconPropsType>;
    title: string;
    href: string;
  }[];
};

export type AuthorContentPropsType = {
  authorName: string;
  MDXContent: string;
};

export type PagePropsType = Promise<{ slug: string }>;

export type PodcastSummaryCardPropsType = {
  podcastEpisode: number;
  podcastCover: string;
  podcastTitle: string | undefined;
  podcastDate: string;
  podcastDuration: string | undefined;
  podcastSlug: string;
};

export type PodcastSidebarPropsType = {
  imageSrc: string;
  podcastTitle: string;
  podcastDate: string;
  podcastDuration: string | undefined;
  podcastListenSocials: {
    id: string;
    name: string;
    Icon: React.FC<IconPropsType>;
    href: string;
  }[];
  podcastShareSocials: {
    id: string;
    name: string;
    Icon: React.FC<IconPropsType>;
    href: string;
  }[];
};

export type MagazineType = {
  magazineDate: string;
  magazineTag: string | undefined;
  magazineCover: string;
  magazineTitle: string;
  magazinePreview: string | undefined;
  magazineAuthor: string | undefined;
  magazineAuthorLink: string | undefined;
  magazineReadTime: string | undefined;
};

export type MagazineSummaryCardPropsType = MagazineType & {
  magazineSlug: string;
};

export type MagazinePostHeroPropsType = MagazineType;

export type MagazinePostSidebarPropsType = {
  magazineAuthorName: string | undefined;
  magazineAuthorImage: string;
  magazineDate: string;
  magazineReadTime: string | undefined;
  magazineSocials: {
    id: string;
    name: string;
    Icon: React.FC<IconPropsType>;
    href: string;
  }[];
};

export type MagazinesPropsType = { magazines: ArticleDataType[] };

export type LinkWithArrowPropsType = {
  linkHref: string;
  linkTitle: string;
  Icon?: React.FC<IconPropsType>;
  classNames?: string;
};
