import * as React from "react";

import Title from "../common/Title";
import LinkWithArrow from "./LinkWithArrow";
import Container from "../common/Container";

import { SyngleNavPropsType } from "@/types";
import { ArrowLeftIcon } from "@/icons/Icons.component";

const SingleNav: React.FC<SyngleNavPropsType> = ({ goBackHref, title }) => {
  return (
    <Container
      as={"section"}
      className="w-full flex items-center justify-between mt-8"
    >
      <LinkWithArrow
        linkHref={`/${goBackHref}`}
        linkTitle="Go Back"
        Icon={ArrowLeftIcon}
        classNames="flex-row-reverse"
      />

      <Title level={"h3"} className="heading-3 uppercase">
        {title}
      </Title>
    </Container>
  );
};

export default SingleNav;
