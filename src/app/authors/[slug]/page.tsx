import * as React from "react";
import { Metadata } from "next";

import { loadArticle } from "@/libs/fileHelpers";
import { followSocials } from "@/constants/authorsConstants";

import Container from "@/components/common/Container";
import SingleNav from "@/components/layouts/SingleNav";
import AuthorSideBar from "@/components/layouts/AuthorSideBar";
import AuthorContents from "@/components/layouts/AuthorContents";
import { PagePropsType } from "@/types";
import Title from "@/components/common/Title";

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
      </Container>
    </main>
  );
};

export default Page;
