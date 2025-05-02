import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import Title from "../common/Title";
import Button from "../common/Button";
import Container from "../common/Container";

import { homepageHero } from "@/constants";

const HomepageHero = () => {
  const {
    CoverImage,
    author,
    date,
    preview,
    readTime,
    tag,
    title,
    postLink,
    authorLink,
  } = homepageHero;

  return (
    <Container
      as={"div"}
      className="flex flex-col gap-4 mb-12 mt-8 md:flex-col-reverse md:mt-12 lg:mt-16 lg:gap-12"
    >
      <Link
        href={postLink}
        className="inline-block w-full h-full lg:max-h-[800px] "
      >
        <Image
          width={1600}
          height={842}
          src={CoverImage}
          alt={`${title} - magazine cover.`}
          className="w-full h-full object-cover object-center lg:max-h-[800px]"
        />
      </Link>

      <div className="flex flex-col gap-4 xl:flex-row">
        <Link href={postLink}>
          <Title level="h1" className="heading-medium uppercase block w-full">
            {title}
          </Title>
        </Link>

        <div className="flex flex-col justify-between xl:min-w-[590px] w-full xl:max-w-[730px]">
          <p>{preview}</p>

          <div className="flex flex-col gap-2 mt-8 md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col gap-2 md:flex-row md:gap-6">
              <div className="flex gap-2">
                <strong>Text</strong>
                <Link href={authorLink} className="text-link">
                  <span>{author}</span>
                </Link>
              </div>

              <div className="flex gap-2">
                <strong>Date</strong>
                <span>{date}</span>
              </div>

              <div className="flex gap-2">
                <strong>Read</strong>
                <span>{readTime}</span>
              </div>
            </div>

            <div>
              <Button variant="label" size="label">
                {tag}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomepageHero;
