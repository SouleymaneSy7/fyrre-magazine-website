import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import Card from "../common/Card";
import Title from "../common/Title";

import { MagazineSummaryCardPropsType } from "@/types";
import Button from "../common/Button";

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
    <Card className="p-6 lg:p-8 border border-primary-clr -ml-px -mt-px">
      <div className="flex items-center justify-between mb-5 md:mb-6 lg:mb-8">
        <p>{magazineDate}</p>

        <Button variant="label" size="label">
          {magazineTag}
        </Button>
      </div>

      <Link
        href={`/magazine/${magazineSlug}`}
        className="inline-block w-full h-auto mb-5 md:mb-6 lg:mb-8"
      >
        <Image
          width={1600}
          height={1600}
          src={magazineCover}
          alt={`${magazineTitle} - cover image.`}
          className="w-full h-full aspect-square object-cover"
        />
      </Link>

      <div>
        <Link href={`/magazine/${magazineSlug}`} className="inline-block mb-4">
          <Title level="h2" className="heading-3">
            {magazineTitle}
          </Title>
        </Link>
        <p className="mb-12">{magazinePreview}</p>

        <div>
          <div className="flex items-baseline gap-2">
            <strong>Text</strong>
            <Link href={`/authors/${authorLink}`} className="text-link">
              {magazineAuthor}
            </Link>
          </div>

          <div className="flex items-baseline gap-2">
            <strong>Read</strong> <span>{magazineReadTime}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MagazineSummaryCard;
