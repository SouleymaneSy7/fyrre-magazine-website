import { getArticlesList } from "@/libs/fileHelpers";
import { magazineCategories } from "@/constants/magazineConstants";

import List from "@/components/common/List";
import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import Headline from "@/components/layouts/Headline";
import Container from "@/components/common/Container";
import MagazineSummaryCard from "@/components/layouts/MagazineSummaryCard";

const Page = async () => {
  const magazinePost = await getArticlesList("magazine");

  return (
    <main id="main-content" className="container">
      <Headline
        imageSrc="/assets/svgs/headline-magazine.svg"
        altText="magazine headline text svg illustration"
      />

      <Container as={"div"}>
        <Title level="h3">Categories</Title>

        <List
          items={magazineCategories}
          renderItem={(item) => {
            return (
              <li key={item.id}>
                <Button variant="label" size="label">
                  {item.tag}
                </Button>
              </li>
            );
          }}
        />
      </Container>

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
    </main>
  );
};

export default Page;
