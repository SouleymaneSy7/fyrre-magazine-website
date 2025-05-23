import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import Card from "../common/Card";
import Title from "../common/Title";

import { MagazineSummaryCardPropsType } from "@/types";
import Button from "../common/Button";
import DateFormatter from "./DateFormatter";

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
    <Card className="flex flex-col justify-between p-6 md:p-8 lg:p-12 border border-primary-clr -ml-px -mt-px">
      <div>
        <div className="flex items-center justify-between mb-5 md:mb-6 lg:mb-8">
          <DateFormatter dateString={magazineDate} />

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
          <Link
            href={`/magazine/${magazineSlug}`}
            className="inline-block mb-4"
          >
            <Title level="h2" className="heading-3" id="card-title">
              {magazineTitle}
            </Title>
          </Link>
          <p className="mb-12">{magazinePreview}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
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
    </Card>
  );
};

export default MagazineSummaryCard;
