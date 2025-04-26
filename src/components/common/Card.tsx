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
    <Container as={"div"} className={clsx(classNames)} {...delegatedProps}>
      {children}
    </Container>
  );
};

export default Card;
