import * as React from "react";

import { PagePropsType } from "@/types";
import { loadArticle } from "@/libs/fileHelpers";
import { followSocials } from "@/constants/authorsConstants";

import Container from "@/components/common/Container";
import SingleNav from "@/components/layouts/SingleNav";
import AuthorSideBar from "@/components/layouts/AuthorSideBar";
import AuthorContents from "@/components/layouts/AuthorContents";

export async function generateMetadata({
  params,
}: PagePropsType): Promise<{ title: string; description: string }> {
  const { frontmatter } = await loadArticle("authors", params.authorSlug);

  return {
    title: `${frontmatter.name} | Fyrre - Modern Magazine & Digital Content Hub `,
    description: frontmatter.preview || "No description available",
  };
}

const page: React.FC<PagePropsType> = async ({ params }) => {
  const { frontmatter, content } = await loadArticle(
    "authors",
    params.authorSlug
  );

  return (
    <main id="main-content" className="container">
      <SingleNav goBackHref="authors" title="authors" />

      <Container as={"section"}>
        <AuthorSideBar
          imageSrc={frontmatter.image}
          authorJob={frontmatter.job}
          authorCity={frontmatter.city}
          authorSocials={followSocials}
        />

        <AuthorContents authorName={frontmatter.name} MDXContent={content} />
      </Container>
    </main>
  );
};

export default page;
