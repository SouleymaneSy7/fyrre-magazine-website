import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import Card from "../common/Card";
import Title from "../common/Title";

import { PodcastSummaryCardPropsType } from "@/types";
import LinkWithArrow from "./LinkWithArrow";

const PodcastSummaryCard: React.FC<PodcastSummaryCardPropsType> = ({
  podcastEpisode,
  podcastCover,
  podcastDate,
  podcastDuration,
  podcastTitle,
  podcastSlug,
}) => {
  return (
    <Card>
      <div>
        <p>{podcastEpisode}</p>

        <Link href={`/podcast/${podcastSlug}`}>
          <div className="w-[100px] h-[100px] ">
            <Image
              src={podcastCover}
              alt={`${podcastTitle} - cover image.`}
              className="w-full h-full aspect-square"
              width={100}
              height={100}
            />
          </div>
        </Link>

        <Link href={`/podcast/${podcastSlug}`}>
          <Title level="h2">{podcastTitle}</Title>
        </Link>
      </div>

      <div>
        <p>
          <strong>Date</strong> <span>{podcastDate}</span>
        </p>

        <p>
          <strong>Duration</strong> <span>{podcastDuration}</span>
        </p>
      </div>

      <LinkWithArrow linkHref={`/podcast/${podcastSlug}`} linkTitle="Listen" />
    </Card>
  );
};

export default PodcastSummaryCard;
