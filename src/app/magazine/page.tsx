import { Metadata } from "next";

import { getArticlesList } from "@/libs/fileHelpers";
import { magazineCategories } from "@/constants/magazineConstants";

import List from "@/components/common/List";
import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import Headline from "@/components/layouts/Headline";
import Container from "@/components/common/Container";
import MagazineSummaryCard from "@/components/layouts/MagazineSummaryCard";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Magazine | Fyrre - Modern Magazine & Digital Content Hub",
  };
}
const Page = async () => {
  const magazinePost = await getArticlesList("magazine");

  return (
    <main id="main-content" className="container">
      <Headline
        imageSrc="/assets/svgs/headline-magazine.svg"
        altText="magazine headline text svg illustration"
      />

      <Container
        as={"div"}
        className="flex justify-between items-center flex-wrap gap-4 py-14 md:py-20 lg:py-24"
      >
        <Title level="h3" className="heading-6 uppercase">
          Categories
        </Title>

        <List
          className="flex items-center gap-2 flex-wrap"
          items={magazineCategories}
          renderItem={(item) => {
            return (
              <li key={item.id} role="listitem">
                <Button variant="label" size="label">
                  {item.tag}
                </Button>
              </li>
            );
          }}
        />
      </Container>

      <Container as={"section"} className="homepage-podcast-grid  pt-px pl-px">
        {magazinePost.map(({ frontmatter, slug }) => {
          return (
            <MagazineSummaryCard
              key={slug}
              magazineSlug={slug}
              magazineAuthor={frontmatter.author}
              magazineAuthorLink={frontmatter.author}
              magazineCover={frontmatter.cover_image}
              magazineDate={frontmatter.date}
              magazinePreview={frontmatter.preview}
              magazineReadTime={frontmatter.read_time}
              magazineTag={frontmatter.tag}
              magazineTitle={frontmatter.title}
            />
          );
        })}
      </Container>
    </main>
  );
};

export default Page;
