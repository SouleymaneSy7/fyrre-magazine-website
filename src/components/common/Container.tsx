import * as React from "react";
import { ContainerPropsTypes } from "@/types";

function Container<C extends React.ElementType>({
  as,
  children,
  ...delegatedProps
}: ContainerPropsTypes<C>) {
  const Component = as || "div";
  return <Component {...delegatedProps}>{children}</Component>;
}

export default Container;
