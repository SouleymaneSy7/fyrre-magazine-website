import * as React from "react";
import clsx from "clsx";

import Container from "./Container";
import { CardPropsType } from "@/types";

const Card: React.FC<CardPropsType> = ({
  children,
  classNames,
  ...delegatedProps
}) => {
  return (
    <Container
      as={"article"}
      className={clsx(classNames)}
      {...delegatedProps}
      aria-labelledby="card-title"
    >
      {children}
    </Container>
  );
};

export default Card;
