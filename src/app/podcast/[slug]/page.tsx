import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { PagePropsType } from "@/types";
import { loadArticle } from "@/libs/fileHelpers";
import { ArrowRightIcon } from "@/icons/Icons.component";
import { homepagePodcastList, listenSocials, shareSocials } from "@/constants";

import Card from "@/components/common/Card";
import Title from "@/components/common/Title";
import Container from "@/components/common/Container";
import SingleNav from "@/components/layouts/SingleNav";
import LinkWithArrow from "@/components/layouts/LinkWithArrow";
import PodcastSidebar from "@/components/layouts/PodcastSidebar";
import PodcastContents from "@/components/layouts/PodcastContents";
import VisuallyHidden from "@/components/common/VisuallyHidden";
import ScrollIndicator from "@/components/layouts/ScrollIndicator";

export async function generateMetadata({
  params,
}: {
  params: PagePropsType;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { frontmatter } = await loadArticle("podcast", resolvedParams.slug);

  return {
    title: frontmatter.title
      ? `${frontmatter.title} | Fyrre - Modern Magazine & Digital Content Hub.`
      : "Podcast Post | Fyrre - Modern Magazine & Digital Content Hub.",
    description:
      frontmatter.preview ||
      "Discover Fyrre - Your destination for curated articles, insightful blogs, and engaging podcasts. A clean, modern platform delivering quality content across multiple formats.",
  };
}

const Page = async (props: { params: PagePropsType }) => {
  const params = await props.params;

  const { frontmatter, content } = await loadArticle("podcast", params.slug);

  return (
    <main
      role="main"
      id="main-content"
      aria-labelledby="main-content"
      className="container"
    >
      <ScrollIndicator />
      <SingleNav goBackHref="podcast" title="podcast" />

      <Container
        as={"section"}
        className="container-medium | flex flex-col gap-8 mb-18 md:gap-16 md:mb-32 lg:gap-24 lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:mb-48"
      >
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

      <Container as={"section"}>
        <div className="flex items-center justify-between pt-6 md:pt-10 lg:pt-12 border-t border-primary-clr mb-14 md:mb-20 lg:mb-24">
          <Title level="h2" className="heading-large uppercase">
            Lastest Episodes
          </Title>

          <Link
            href={"/podcast"}
            className="inline-block md:hidden lg:hidden xl:hidden"
          >
            <ArrowRightIcon />

            <VisuallyHidden>Go to podcast latest episode page</VisuallyHidden>
          </Link>

          <LinkWithArrow
            linkHref={"/podcast"}
            linkTitle={"See All"}
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
            },
          )}
        </div>
      </Container>
    </main>
  );
};

export default Page;
