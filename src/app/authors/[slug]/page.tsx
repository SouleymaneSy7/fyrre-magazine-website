import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { PagePropsType } from "@/types";
import { loadArticle } from "@/libs/fileHelpers";
import { followSocials } from "@/constants/authorsConstants";

import Card from "@/components/common/Card";
import Title from "@/components/common/Title";
import Container from "@/components/common/Container";
import SingleNav from "@/components/layouts/SingleNav";
import AuthorSideBar from "@/components/layouts/AuthorSideBar";
import DateFormatter from "@/components/layouts/DateFormatter";
import AuthorContents from "@/components/layouts/AuthorContents";
import ScrollIndicator from "@/components/layouts/ScrollIndicator";

export async function generateMetadata({
  params,
}: {
  params: PagePropsType;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { frontmatter } = await loadArticle("authors", resolvedParams.slug);

  return {
    title: frontmatter.name
      ? `${frontmatter.name} | Fyrre - Modern Magazine & Digital Content Hub.`
      : "Authors Profile | Fyrre - Modern Magazine & Digital Content Hub.",
    description:
      frontmatter.preview ||
      "Discover Fyrre - Your destination for curated articles, insightful blogs, and engaging podcasts. A clean, modern platform delivering quality content across multiple formats.",
  };
}

const Page = async (props: { params: PagePropsType }) => {
  const params = await props.params;

  const { frontmatter, content } = await loadArticle("authors", params.slug);

  return (
    <main id="main-content" className="container">
      <ScrollIndicator />
      <SingleNav goBackHref="authors" title="authors" />

      <Container
        as={"section"}
        className="container-medium | flex flex-col gap-12 mb-18 md:gap-16 md:mb-32 lg:gap-24 lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:mb-48"
      >
        <AuthorSideBar
          imageSrc={frontmatter.image}
          authorName={frontmatter.name}
          authorJob={frontmatter.job}
          authorCity={frontmatter.city}
          authorSocials={followSocials}
        />

        <AuthorContents authorName={frontmatter.name} MDXContent={content} />
      </Container>

      <Container as={"section"}>
        <div className="pt-6 md:pt-10 lg:pt-12 border-t border-primary-clr mb-14 md:mb-20 lg:mb-24">
          <Title level="h2" className="heading-small">
            Articles by {frontmatter.name}
          </Title>
        </div>

        <div className="home-authors-grid | pt-px pl-px">
          {frontmatter.articles?.map(
            ({ id, cover_image, date, link, read_time, title }) => {
              return (
                <Card
                  key={id}
                  className="flex gap-8 flex-wrap items-center p-8 border border-primary-clr -ml-px -mt-px mg:gap-12"
                >
                  <Link
                    href={`/magazine/${link}`}
                    className="inline-block w-[150px] h-[150px] md:w-[80px] md:h-[80px] lg:w-[150px] lg:h-[150px]"
                  >
                    <Image
                      src={cover_image}
                      alt={`${title} - cover image.`}
                      width={500}
                      height={500}
                      className="w-full h-full aspect-square object-cover"
                    />
                  </Link>

                  <div>
                    <Link href={`/magazine/${link}`}>
                      <Title
                        level="h3"
                        className="heading-3 mb-4"
                        id="card-title"
                      >
                        {title}
                      </Title>
                    </Link>

                    <div className="flex flex-col gap-4 md:flex-row md:items-baseline ">
                      <div className="flex items-baseline gap-2">
                        <strong>Date</strong>
                        <span>
                          <DateFormatter dateString={date} />
                        </span>
                      </div>

                      <div className="flex items-baseline gap-2">
                        <strong>Read</strong>
                        <span>{read_time}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            }
          )}
        </div>
      </Container>
    </main>
  );
};

export default Page;
