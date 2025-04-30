import * as React from "react";
import Image from "next/image";

import List from "../common/List";
import Title from "../common/Title";
import Container from "../common/Container";

import { PodcastSidebarPropsType } from "@/types";

const PodcastSidebar: React.FC<PodcastSidebarPropsType> = ({
  imageSrc,
  podcastDate,
  podcastTitle,
  podcastDuration,
  podcastListenSocials,
  podcastShareSocials,
}) => {
  return (
    <Container as={"aside"}>
      <div>
        <Image
          priority
          width={100}
          height={100}
          src={imageSrc}
          alt={`${podcastTitle} - cover image.`}
        />
      </div>

      <div>
        <Title level="h3">Listen On</Title>

        <List
          items={podcastListenSocials}
          renderItem={(item) => {
            const Icon = item.Icon;

            return (
              <li key={item.id}>
                <a href={item.href} target="_blank" title={item.name}>
                  <Icon />
                </a>
              </li>
            );
          }}
        />
      </div>

      <div>
        <p>
          <strong>Date</strong> <span>{podcastDate}</span>
        </p>

        <p>
          <strong>Duration</strong> <span>{podcastDuration}</span>
        </p>

        <div>
          <Title level="h3">Share</Title>

          <List
            items={podcastShareSocials}
            renderItem={(item) => {
              const Icon = item.Icon;

              return (
                <li key={item.id}>
                  <a href={item.href} target="_blank" title={item.name}>
                    <Icon />
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

export default PodcastSidebar;
