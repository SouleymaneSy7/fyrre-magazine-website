import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import Card from "../common/Card";
import Title from "../common/Title";

import { PodcastSummaryCardPropsType } from "@/types";
import LinkWithArrow from "./LinkWithArrow";
import DateFormatter from "./DateFormatter";

const PodcastSummaryCard: React.FC<PodcastSummaryCardPropsType> = ({
  podcastEpisode,
  podcastCover,
  podcastDate,
  podcastDuration,
  podcastTitle,
  podcastSlug,
}) => {
  return (
    <Card className="flex flex-col gap-4 pb-8 mb-8 md:flex-row md:gap-6 lg:pb-12 lg:mb-12 lg:items-center lg:gap-12 border-b border-b-primary-clr nth-last-[1]:border-b-0 nth-last-[1]:pb-0 nth-last-[1]:mb-0">
      <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:gap-6 lg:gap-12">
        <Title level="h4" className="heading-4">
          0{podcastEpisode}
        </Title>

        <Link
          href={`/podcast/${podcastSlug}`}
          className="inline-block w-full h-full md:min-w-[130px] md:w-[180px] md:h-[180px] md:min-h-[130px] lg:w-[240px] lg:h-[240px]"
        >
          <Image
            src={podcastCover}
            alt={`${podcastTitle} - cover image.`}
            className="w-full h-full aspect-square"
            width={800}
            height={800}
          />
        </Link>
      </div>

      <div className="grow flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-12 lg:justify-between">
        <Link href={`/podcast/${podcastSlug}`} className="w-full max-w-[350px]">
          <Title level="h2" className="heading-3" id="card-title">
            {podcastTitle}
          </Title>
        </Link>

        <div className="flex flex-col gap-2 lg:flex-row lg:gap-6 lg:items-center">
          <p>
            <strong>Date</strong> <DateFormatter dateString={podcastDate} />
          </p>

          <p>
            <strong>Duration</strong> <span>{podcastDuration}</span>
          </p>
        </div>
      </div>

      <div className="hidden lg:inline-block">
        <LinkWithArrow
          linkHref={`/podcast/${podcastSlug}`}
          linkTitle="Listen"
        />
      </div>
    </Card>
  );
};

export default PodcastSummaryCard;
