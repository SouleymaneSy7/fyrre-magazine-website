import Link from "next/link";
import { Metadata } from "next";

import Title from "@/components/common/Title";
import Container from "@/components/common/Container";
import SingleNav from "@/components/layouts/SingleNav";
import LinkWithArrow from "@/components/layouts/LinkWithArrow";
import MagazinePostHero from "@/components/layouts/MagazinePostHero";
import MagazinePostSidebar from "@/components/layouts/MagazinePostSidebar";
import MagazinePostContents from "@/components/layouts/MagazinePostContents";

import { PagePropsType } from "@/types";
import { shareSocials } from "@/constants";
import { loadArticle } from "@/libs/fileHelpers";
import { ArrowRightIcon } from "@/icons/Icons.component";
import MagazineLatestArticles from "@/components/layouts/MagazineLatestArticles";
import VisuallyHidden from "@/components/common/VisuallyHidden";
import ScrollIndicator from "@/components/layouts/ScrollIndicator";

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
      <ScrollIndicator />
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
          as={"section"}
          className="container-medium | flex flex-col-reverse gap-8 mb-18 md:gap-16 md:mb-32 lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:mb-48"
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

      <Container as={"section"}>
        <div className="flex items-center justify-between pt-6 md:pt-10 lg:pt-12 border-t border-primary-clr mb-14 md:mb-20 lg:mb-24">
          <Title level="h2" className="heading-large uppercase">
            Lastest Posts
          </Title>

          <Link
            href={"/magazine"}
            className="inline-block md:hidden lg:hidden xl:hidden"
          >
            <ArrowRightIcon />
            <VisuallyHidden>Go to magazine latest post page</VisuallyHidden>
          </Link>

          <LinkWithArrow
            linkHref={"/magazine"}
            linkTitle={"See All"}
            classNames="hidden md:flex"
          />
        </div>

        <MagazineLatestArticles />
      </Container>
    </main>
  );
};

export default Page;
