import * as React from "react";

type ContainerTypes<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

function Container<C extends React.ElementType>({
  as,
  children,
  ...delegatedProps
}: ContainerTypes<C>) {
  const Component = as || "div";
  return <Component {...delegatedProps}>{children}</Component>;
}

export default Container;
