import * as React from "react";
import Image from "next/image";

import List from "../common/List";
import Title from "../common/Title";
import Container from "../common/Container";

import { PodcastSidebarPropsType } from "@/types";
import VisuallyHidden from "../common/VisuallyHidden";

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
      <div className="w-full h-auto mb-4">
        <Image
          priority
          width={800}
          height={800}
          src={imageSrc}
          alt={`${podcastTitle} - cover image.`}
          className="w-full h-full aspect-square"
        />
      </div>

      <div className="flex items-center justify-between border-b border-primary-clr pb-5 mb-5 md:pb-6 md:mb-6 lg:pb-8 lg:mb-8">
        <Title level="h3" className="heading-5 uppercase">
          Listen On
        </Title>

        <List
          className="flex items-center gap-3"
          items={podcastListenSocials}
          renderItem={(item) => {
            const Icon = item.Icon;

            return (
              <li key={item.id} role="listitem">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Listen to us on ${item.name}`}
                  aria-label={`Listen to us on ${item.name}`}
                >
                  <Icon />
                  <VisuallyHidden>Listen to us on {item.name}</VisuallyHidden>
                </a>
              </li>
            );
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <strong>Date</strong> <span>{podcastDate}</span>
        </div>

        <div className="flex items-center justify-between">
          <strong>Duration</strong> <span>{podcastDuration}</span>
        </div>

        <div className="flex items-center justify-between">
          <Title level="h3">Share</Title>

          <List
            className="flex items-center gap-3"
            items={podcastShareSocials}
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

export default PodcastSidebar;
