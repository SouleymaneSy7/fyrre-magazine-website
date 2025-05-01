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
    <Card>
      <div>
        <Link href={`/magazine/${authorSlug}`}>
          <Image
            priority
            width={100}
            height={100}
            src={imageSrc}
            alt={`${authorName} - profile image.`}
          />
        </Link>

        <Link href={`/magazine/${authorSlug}`}>
          <Title level="h2">{authorName}</Title>
        </Link>
      </div>

      <div>
        <p>
          <strong>Job</strong> <span>{authorJob}</span>
        </p>
        <p>
          <strong>Job</strong> <span>{authorCity}</span>
        </p>

        <LinkWithArrow linkHref={`/authors/${authorSlug}`} linkTitle="About" />
      </div>
    </Card>
  );
};

export default AuthorSummaryCard;
