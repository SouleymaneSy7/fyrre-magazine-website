import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import Card from "../common/Card";
import Title from "../common/Title";

import { MagazineSummaryCardPropsType } from "@/types";

const MagazineSummaryCard: React.FC<MagazineSummaryCardPropsType> = ({
  magazineAuthor,
  magazineCover,
  magazineDate,
  magazinePreview,
  magazineReadTime,
  magazineTag,
  magazineTitle,
  magazineSlug,
  magazineAuthorLink,
}) => {
  const authorLink = magazineAuthorLink?.replace(" ", "-").toLowerCase();

  return (
    <Card>
      <div>
        <p>{magazineDate}</p>
        <p>{magazineTag}</p>
      </div>

      <Link href={`/magazine/${magazineSlug}`}>
        <Image
          width={100}
          height={100}
          src={magazineCover}
          alt={`${magazineTitle} - cover image.`}
        />
      </Link>

      <div>
        <Link href={`/magazine/${magazineSlug}`}>
          <Title level="h2">{magazineTitle}</Title>
        </Link>
        <p>{magazinePreview}</p>

        <div>
          <Link href={`/authors/${authorLink}`}>
            <strong>Text</strong> <span>{magazineAuthor}</span>
          </Link>

          <p>
            <strong>Read</strong> <span>{magazineReadTime}</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default MagazineSummaryCard;
