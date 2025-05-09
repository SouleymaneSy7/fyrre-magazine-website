import * as React from "react";
import { TitlePropsType } from "@/types";

const Title: React.FC<TitlePropsType> = ({
  level,
  children,
  ...delegatedProps
}) => {
  const Heading: React.FC<React.HTMLAttributes<HTMLElement>> = ({
    ...delegatedProps
  }) => {
    return React.createElement(level, delegatedProps, children);
  };

  return (
    <Heading {...delegatedProps} role="heading">
      {children}
    </Heading>
  );
};

export default Title;
