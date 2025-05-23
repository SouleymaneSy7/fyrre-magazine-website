import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import List from "../common/List";
import Title from "../common/Title";
import Container from "../common/Container";

import { MagazinePostSidebarPropsType } from "@/types";
import VisuallyHidden from "../common/VisuallyHidden";
import DateFormatter from "./DateFormatter";

const MagazinePostSidebar: React.FC<MagazinePostSidebarPropsType> = ({
  magazineAuthorImage,
  magazineAuthorName,
  magazineDate,
  magazineReadTime,
  magazineSocials,
}) => {
  const authorLink = magazineAuthorName?.replace(" ", "-").toLowerCase();

  return (
    <Container as={"aside"} className="w-full col-span-1">
      <div className="w-full flex items-center gap-4 border-b border-primary-clr pb-5 mb-5 md:pb-6 md:mb-6 lg:pb-8 lg:mb-8">
        <Link
          href={`/authors/${authorLink}`}
          className="inline-block w-full h-full max-w-20 max-h-20"
        >
          <div className="rounded-full overflow-hidden">
            <Image
              src={magazineAuthorImage}
              alt={`${magazineAuthorName} - author profile image.`}
              width={620}
              height={620}
              className="w-full h-full aspect-square object-contain object-center"
            />
          </div>
        </Link>

        <Link href={`/authors/${authorLink}`}>
          <Title level="h2" className="heading-3">
            {magazineAuthorName}
          </Title>
        </Link>
      </div>

      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <strong>Date</strong>
          <DateFormatter dateString={magazineDate} />
        </div>

        <div className="flex items-center justify-between">
          <strong>Read</strong>
          <span>{magazineReadTime}</span>
        </div>

        <div className="flex items-center justify-between">
          <p>
            <strong>Share</strong>
          </p>

          <List
            className="flex gap-3 items-center"
            items={magazineSocials}
            renderItem={(item) => {
              const Icon = item.Icon;

              return (
                <li key={item.id} role="listitem">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`follow us on ${item.name}`}
                    aria-label={`follow us on ${item.name}`}
                  >
                    <Icon />
                    <VisuallyHidden>Follow us on {item.name}</VisuallyHidden>
                  </a>
                </li>
              );
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default MagazinePostSidebar;
