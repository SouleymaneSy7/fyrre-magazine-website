import React from "react";
import Link from "next/link";
import Image from "next/image";

import Card from "../common/Card";
import Title from "../common/Title";
import Container from "../common/Container";
import LinkWithArrow from "./LinkWithArrow";

import { homepagePodcastList } from "@/constants";
import { ArrowRightIcon } from "@/icons/Icons.component";
import VisuallyHidden from "../common/VisuallyHidden";

const HomepagePodcastList = () => {
  return (
    <Container as={"section"}>
      <div className="flex items-center justify-between pt-6 md:pt-10 lg:pt-12 border-t border-primary-clr mb-14 md:mb-20 lg:mb-24">
        <Title level="h2" className="heading-large uppercase">
          Podcasts
        </Title>

        <Link
          href={"/podcast"}
          className="inline-block md:hidden lg:hidden xl:hidden"
        >
          <ArrowRightIcon />

          <VisuallyHidden>Go to podcast page</VisuallyHidden>
        </Link>

        <LinkWithArrow
          linkHref={"/podcast"}
          linkTitle={"All Episodes"}
          classNames="hidden md:flex"
        />
      </div>

      <div className="homepage-podcast-grid pt-px pl-px mb-18 md:mb-32 lg:mb-48">
        {homepagePodcastList.map(
          ({ id, title, coverImage, date, duration }) => {
            return (
              <Card
                key={id}
                className="p-6 lg:p-8 border border-primary-clr -ml-px -mt-px"
              >
                <div className="w-full h-auto mb-5 md:mb-6 lg:mb-8">
                  <Image
                    src={coverImage}
                    alt={`${title} - podcast cover image.`}
                    width={960}
                    height={960}
                    className="w-full h-full aspect-square"
                  />
                </div>

                <div>
                  <Title
                    level="h3"
                    className="heading-3 mb-6 md:mb-10 lg:mb-12"
                    id="card-title"
                  >
                    {title}
                  </Title>

                  <div className="flex gap-2 items-baseline mb-2">
                    <strong>Date</strong>
                    <span>{date}</span>
                  </div>

                  <div className="flex gap-2 items-baseline">
                    <strong>Duration</strong>
                    <span>{duration}</span>
                  </div>
                </div>
              </Card>
            );
          }
        )}
      </div>
    </Container>
  );
};

export default HomepagePodcastList;
