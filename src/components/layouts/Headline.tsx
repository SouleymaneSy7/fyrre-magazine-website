import * as React from "react";
import Image from "next/image";

import Container from "../common/Container";
import { HeadlinePropsType } from "@/types";

const Headline: React.FC<HeadlinePropsType> = ({ imageSrc, altText }) => {
  return (
    <Container
      as={"div"}
      className="w-full my-5 h-[clamp(2rem, 1.4718rem + 2.2535vw, 3.5rem)] md:h-[clamp(3.5rem, 2.6197rem + 3.7559vw, 6rem)] lg:h-[clamp(8rem, 6.0634rem + 8.2629vw, 13.5rem)] lg:my-8"
    >
      <Image
        priority
        width={100}
        height={100}
        alt={altText}
        src={imageSrc}
        className="w-full h-full"
      />
    </Container>
  );
};

export default Headline;
