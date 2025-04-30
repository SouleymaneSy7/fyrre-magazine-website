import { Metadata } from "next";

import { PagePropsType } from "@/types";
import { loadArticle } from "@/libs/fileHelpers";
import { listenSocials, shareSocials } from "@/constants";

import Container from "@/components/common/Container";
import SingleNav from "@/components/layouts/SingleNav";
import PodcastSidebar from "@/components/layouts/PodcastSidebar";
import PodcastContents from "@/components/layouts/PodcastContents";

export async function generateMetadata({
  params,
}: {
  params: PagePropsType;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { frontmatter } = await loadArticle("podcast", resolvedParams.slug);

  return {
    title: `${frontmatter.title} | Fyrre - Modern Magazine & Digital Content Hub.`,
    description: frontmatter.preview || "No description available",
  };
}

const Page = async (props: { params: PagePropsType }) => {
  const params = await props.params;

  const { frontmatter, content } = await loadArticle("podcast", params.slug);

  return (
    <main id="main-content" className="container">
      <SingleNav goBackHref="podcast" title="podcast" />

      <Container as={"section"}>
        <PodcastSidebar
          imageSrc={frontmatter.image}
          podcastTitle={frontmatter.title}
          podcastDate={frontmatter.date}
          podcastDuration={frontmatter.duration}
          podcastListenSocials={listenSocials}
          podcastShareSocials={shareSocials}
        />

        <PodcastContents
          MDXContent={content}
          podcastEpisode={frontmatter.episode}
          podcastTitle={frontmatter.title}
        />
      </Container>
    </main>
  );
};

export default Page;
