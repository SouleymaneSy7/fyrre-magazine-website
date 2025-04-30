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
    <Container as={"div"}>
      <Link href={postLink}>
        <Image
          width={100}
          height={100}
          src={CoverImage}
          alt={`${title} - magazine cover.`}
        />
      </Link>

      <div>
        <Link href={postLink}>
          <Title level="h1">{title}</Title>
        </Link>

        <div>
          <p>{preview}</p>

          <div>
            <div>
              <p>
                <strong>Text</strong>
                <Link href={authorLink}>
                  <span>{author}</span>
                </Link>
              </p>

              <p>
                <strong>Date</strong>
                <span>{date}</span>
              </p>

              <p>
                <strong>Read</strong>
                <span>{readTime}</span>
              </p>
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
