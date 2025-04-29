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
  date?: string;
  job?: string;
  city?: string;
  author?: string;
  duration?: string;
  read_time?: string;
  tag?: string;
  preview?: string;
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
  authorSocials: {
    id: string;
    Icon: React.FC<IconPropsType>;
    href: string;
  }[];
};

export type AuthorContentPropsType = {
  authorName: string;
  MDXContent: string;
};

export type PagePropsType = {
  params: { authorSlug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};
