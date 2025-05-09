import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import Card from "../common/Card";
import Title from "../common/Title";

import { AuthorSummaryCardPropsType } from "@/types";
import LinkWithArrow from "./LinkWithArrow";

const AuthorSummaryCard: React.FC<AuthorSummaryCardPropsType> = ({
  imageSrc,
  authorName,
  authorJob,
  authorCity,
  authorSlug,
}) => {
  return (
    <Card className="flex flex-col gap-4 pb-12 mb-12 border-b border-b-primary-clr md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-12 lg:items-center nth-last-[1]:border-b-0 nth-last-[1]:pb-0 nth-last-[1]:mb-0">
      <Link
        href={`/authors/${authorSlug}`}
        className="inline-block w-[150px] h-[150px] rounded-full overflow-hidden md:w-[80px] md:h-[80px] lg:w-[150px] lg:h-[150px]"
      >
        <Image
          priority
          width={150}
          height={150}
          src={imageSrc}
          alt={`${authorName} - profile image.`}
          className="w-full h-full aspect-square object-cover"
        />
      </Link>

      <div className="grow lg:flex lg:gap-12 lg:items-center">
        <Link href={`/authors/${authorSlug}`} className="grow">
          <Title level="h2" className="heading-3" id="card-title">
            {authorName}
          </Title>
        </Link>

        <div className="flex flex-col gap-2 mt-4 lg:flex-row lg:gap-10 lg:m-0">
          <p>
            <strong>Job</strong> <span>{authorJob}</span>
          </p>
          <p>
            <strong>City</strong> <span>{authorCity}</span>
          </p>
        </div>
      </div>

      <div>
        <LinkWithArrow linkHref={`/authors/${authorSlug}`} linkTitle="About" />
      </div>
    </Card>
  );
};

export default AuthorSummaryCard;
