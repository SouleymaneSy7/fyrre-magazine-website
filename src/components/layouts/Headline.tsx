import * as React from "react";
import Image from "next/image";

import Container from "../common/Container";
import { HeadlinePropsType } from "@/types";

const Headline: React.FC<HeadlinePropsType> = ({ imageSrc, altText }) => {
  return (
    <Container
      as={"div"}
      className="w-full h-[72px] mt-6 md:h-[96px] lg:h-[196px]"
    >
      <Image
        src={imageSrc}
        alt={altText}
        className="w-full h-full"
        width={100}
        height={100}
        priority
      />
    </Container>
  );
};

export default Headline;
