import { getArticlesList } from "@/libs/fileHelpers";

import Headline from "@/components/layouts/Headline";
import AuthorSummaryCard from "@/components/layouts/AuthorSummaryCard";

const page = async () => {
  const avatarList = await getArticlesList("authors");

  return (
    <main id="main-content" className="container">
      <Headline
        imageSrc="/assets/svgs/headline-authors.svg"
        altText="authors headline text svg"
      />

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
    </main>
  );
};

export default page;
