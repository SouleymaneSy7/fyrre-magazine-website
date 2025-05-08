import { Metadata } from "next";

import Container from "@/components/common/Container";
import SingleNav from "@/components/layouts/SingleNav";
import MagazinePostHero from "@/components/layouts/MagazinePostHero";
import MagazinePostSidebar from "@/components/layouts/MagazinePostSidebar";
import MagazinePostContents from "@/components/layouts/MagazinePostContents";

import { PagePropsType } from "@/types";
import { shareSocials } from "@/constants";
import { loadArticle } from "@/libs/fileHelpers";

export async function generateMetadata({
  params,
}: {
  params: PagePropsType;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { frontmatter } = await loadArticle("magazine", resolvedParams.slug);

  return {
    title: frontmatter.title
      ? `${frontmatter.title} | Fyrre - Modern Magazine & Digital Content Hub.`
      : "Magazine Post | Fyrre - Modern Magazine & Digital Content Hub.",
    description:
      frontmatter.preview ||
      "Discover Fyrre - Your destination for curated articles, insightful blogs, and engaging podcasts. A clean, modern platform delivering quality content across multiple formats.",
  };
}

const Page = async (props: { params: PagePropsType }) => {
  const params = await props.params;

  const { frontmatter, content } = await loadArticle("magazine", params.slug);

  return (
    <main id="main-content" className="container">
      <SingleNav goBackHref="magazine" title="magazine" />

      <Container as={"section"}>
        <MagazinePostHero
          magazineTag={frontmatter.tag}
          magazineTitle={frontmatter.title}
          magazineAuthor={frontmatter.author}
          magazineAuthorLink={frontmatter.author}
          magazineCover={frontmatter.cover_image}
          magazineDate={frontmatter.date}
          magazinePreview={frontmatter.preview}
          magazineReadTime={frontmatter.read_time}
        />

        <Container
          as={"div"}
          className="container-medium | flex flex-col-reverse gap-8 md:gap-16 lg:grid lg:grid-rows-1 lg:grid-cols-3"
        >
          <MagazinePostSidebar
            magazineAuthorImage={frontmatter.author_image}
            magazineAuthorName={frontmatter.author}
            magazineDate={frontmatter.date}
            magazineReadTime={frontmatter.read_time}
            magazineSocials={shareSocials}
          />

          <MagazinePostContents MDXContent={content} />
        </Container>
      </Container>
    </main>
  );
};

export default Page;
