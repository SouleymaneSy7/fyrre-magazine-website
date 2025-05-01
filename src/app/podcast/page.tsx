import { Metadata } from "next";

import { getArticlesList } from "@/libs/fileHelpers";

import Headline from "@/components/layouts/Headline";
import PodcastSummaryCard from "@/components/layouts/PodcastSummaryCard";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Podcast | Fyrre - Modern Magazine & Digital Content Hub",
  };
}

const Page = async () => {
  const podcastList = await getArticlesList("podcast");

  return (
    <main id="main-content" className="container">
      <Headline
        imageSrc="/assets/svgs/headline-podcast.svg"
        altText="podcast headline text svg illustration"
      />

      {podcastList.map(({ frontmatter, slug }) => {
        return (
          <PodcastSummaryCard
            key={slug}
            podcastSlug={slug}
            podcastDate={frontmatter.date}
            podcastCover={frontmatter.image}
            podcastEpisode={frontmatter.episode}
            podcastDuration={frontmatter.duration}
            podcastTitle={frontmatter.title}
          />
        );
      })}
    </main>
  );
};

export default Page;
