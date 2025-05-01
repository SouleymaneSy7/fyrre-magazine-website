import React from "react";
import Container from "../common/Container";
import Title from "../common/Title";
import LinkWithArrow from "./LinkWithArrow";
import { homepagePodcastList } from "@/constants";
import Card from "../common/Card";
import Image from "next/image";

const HomepagePodcastList = () => {
  return (
    <Container as={"section"}>
      <div>
        <Title level="h2">Podcast</Title>
        <LinkWithArrow linkHref={"/podcast"} linkTitle={"All Episodes"} />
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
