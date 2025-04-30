import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import Title from "../common/Title";
import Container from "../common/Container";

import { MagazinePostHeroPropsType } from "@/types";

const MagazinePostHero: React.FC<MagazinePostHeroPropsType> = ({
  magazineAuthor,
  magazineAuthorLink,
  magazineCover,
  magazineDate,
  magazinePreview,
  magazineReadTime,
  magazineTag,
  magazineTitle,
}) => {
  const authorLink = magazineAuthorLink?.replace(" ", "-").toLowerCase();

  return (
    <Container as={"div"}>
      <div>
        <Title level="h1">{magazineTitle}</Title>

        <p>
          <strong>{magazinePreview}</strong>
        </p>
      </div>

      <div>
        <div>
          <Link href={`/authors/${authorLink}`}>
            <strong>Text</strong> <span>{magazineAuthor}</span>
          </Link>

          <p>
            <strong>Date</strong> <span>{magazineDate}</span>
          </p>

          <p>
            <strong>Read</strong> <span>{magazineReadTime}</span>
          </p>
        </div>

        <p>{magazineTag}</p>
      </div>

      <div>
        <Image
          width={100}
          height={100}
          src={magazineCover}
          alt={`${magazineTitle} magazine - cover image.`}
        />
      </div>
    </Container>
  );
};

export default MagazinePostHero;
