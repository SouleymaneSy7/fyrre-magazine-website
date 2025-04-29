import * as React from "react";
import Link from "next/link";

import Title from "../common/Title";
import Container from "../common/Container";

import { SyngleNavPropsType } from "@/types";
import { ArrowLeftIcon } from "@/icons/Icons.component";

const SingleNav: React.FC<SyngleNavPropsType> = ({ goBackHref, title }) => {
  return (
    <Container
      as={"section"}
      className="w-full flex items-center justify-between"
    >
      <Link href={`/${goBackHref}`} className="flex items-center gap-2">
        <ArrowLeftIcon />
        <span className="uppercase font-semi-bold">Go back</span>
      </Link>

      <Title level={"h3"} className="heading-3 uppercase">
        {title}
      </Title>
    </Container>
  );
};

export default SingleNav;
