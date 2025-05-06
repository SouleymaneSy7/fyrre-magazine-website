import React from "react";
import Image from "next/image";

import Card from "../common/Card";
import Title from "../common/Title";
import Container from "../common/Container";
import LinkWithArrow from "./LinkWithArrow";

import { homepagePodcastList } from "@/constants";
import { ArrowRightIcon } from "@/icons/Icons.component";
import Link from "next/link";

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
        </Link>

        <LinkWithArrow
          linkHref={"/podcast"}
          linkTitle={"All Episodes"}
          classNames="hidden md:flex"
        />
      </div>

      <div>
        {homepagePodcastList.map(
          ({ id, title, coverImage, date, duration }) => {
            return (
              <Card key={id}>
                <div>
                  <Image
                    src={coverImage}
                    alt={`${title} - podcast cover image.`}
                    width={100}
                    height={100}
                  />
                </div>

                <div>
                  <Title level="h3">{title}</Title>

                  <div>
                    <strong>Date</strong>
                    <span>{date}</span>
                  </div>

                  <div>
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
