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
  classNames: string;
} & React.ComponentPropsWithoutRef<"div">;

export type FrontmatterType = {
  title: string;
  date: string;
  preview?: string;
  slug?: string;
  [key: string]: string | number | boolean | undefined;
};

export type ArticleDataType = {
  frontmatter: FrontmatterType;
  content: string;
  slug: string;
};
