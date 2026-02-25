import { Metadata } from "next";

import { getArticlesList } from "@/libs/fileHelpers";

import Headline from "@/components/layouts/Headline";
import AuthorSummaryCard from "@/components/layouts/AuthorSummaryCard";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Authors | Fyrre - Modern Magazine & Digital Content Hub",
  };
}

const page = async () => {
  const avatarList = await getArticlesList("authors");

  return (
    <main
      role="main"
      id="main-content"
      aria-labelledby="main-content"
      className="container"
    >
      <Headline
        imageSrc="/assets/svgs/headline-authors.svg"
        altText="authors headline text svg"
      />

      <div className="pt-14 md:pt-20 lg:pt-24">
        {avatarList.map((author) => {
          return (
            <AuthorSummaryCard
              key={author.slug}
              authorSlug={author.slug}
              imageSrc={author.frontmatter.image}
              authorName={author.frontmatter.name}
              authorJob={author.frontmatter.job}
              authorCity={author.frontmatter.city}
            />
          );
        })}
      </div>
    </main>
  );
};

export default page;
