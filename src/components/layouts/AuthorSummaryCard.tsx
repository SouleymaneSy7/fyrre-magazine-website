import * as React from "react";
import Card from "../common/Card";
import Container from "../common/Container";
import Image from "next/image";
import Title from "../common/Title";
import Link from "next/link";
import { ArrowRightIcon } from "@/icons/Icons.component";
import { AuthorSummaryCardPropsType } from "@/types";

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
        <Container as={"div"}>
          <Image
            priority
            width={100}
            height={100}
            src={imageSrc}
            alt={`avatar profile image for ${authorName}`}
          />
        </Container>

        <Title level="h2">{authorName}</Title>
      </div>

      <div>
        <p>
          <strong>Job</strong> <span>{authorJob}</span>
        </p>
        <p>
          <strong>Job</strong> <span>{authorCity}</span>
        </p>

        <Link href={`/authors/${authorSlug}`}>
          <span>About</span> <ArrowRightIcon />
        </Link>
      </div>
    </Card>
  );
};

export default AuthorSummaryCard;
