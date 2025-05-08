import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import Title from "../common/Title";
import Container from "../common/Container";

import { MagazinePostHeroPropsType } from "@/types";
import Button from "../common/Button";

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
    <Container as={"div"} className="mb-14 md:mb-20 lg:mb-24">
      <div className="flex flex-col gap-16 mb-14 md:mb-20 lg:flex-row lg:mb-24">
        <Title level="h1" className="heading-medium uppercase">
          {magazineTitle}
        </Title>

        <div className="w-full xl:min-w-[590px] xl:max-w-[730px]">
          <p>
            <strong className="text-large font-medium">
              {magazinePreview}
            </strong>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 mb-5 md:flex-row md:justify-between md:items-center md:mb-6 lg:mb-8">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
          <div className="flex items-baseline gap-2">
            <strong>Text</strong>
            <Link href={`/authors/${authorLink}`} className="text-link">
              {magazineAuthor}
            </Link>
          </div>

          <div className="flex items-baseline gap-2">
            <strong>Date</strong> <span>{magazineDate}</span>
          </div>

          <div className="flex items-baseline gap-2">
            <strong>Read</strong> <span>{magazineReadTime}</span>
          </div>
        </div>

        <Button variant="label" size="label">
          {magazineTag}
        </Button>
      </div>

      <div className="w-full h-auto">
        <Image
          width={2500}
          height={1200}
          src={magazineCover}
          alt={`${magazineTitle} magazine - cover image.`}
          className="w-full h-full aspect-video"
        />
      </div>
    </Container>
  );
};

export default MagazinePostHero;
