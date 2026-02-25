import * as React from "react";
import { Metadata } from "next";

import { getArticlesList } from "@/libs/fileHelpers";

import Title from "@/components/common/Title";
import Headline from "@/components/layouts/Headline";
import Container from "@/components/common/Container";
import Magazines from "@/components/layouts/Magazines";
import MagazineCategories from "@/components/layouts/MagazineCategories";

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

        <React.Suspense fallback={<>Loading...</>}>
          <MagazineCategories />
        </React.Suspense>
      </Container>

      <React.Suspense fallback={<>Loading...</>}>
        <Magazines magazines={magazinePost} />
      </React.Suspense>
    </main>
  );
};

export default Page;
