"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

import Container from "../common/Container";
import MagazineSummaryCard from "./MagazineSummaryCard";
import { ArticleDataType, MagazinesPropsType } from "@/types";

const Magazines: React.FC<MagazinesPropsType> = ({ magazines }) => {
  const params = useSearchParams();
  const category = params.get("category");

  const filteredMagazine = React.useMemo(() => {
    if (category === "all") {
      return magazines;
    } else if (category) {
      return magazines.filter((item: ArticleDataType) => {
        return item.frontmatter.tag === category;
      });
    }

    return magazines;
  }, [magazines, category]);

  return (
    <Container as={"section"} className="homepage-podcast-grid  pt-px pl-px">
      {filteredMagazine.map(({ frontmatter, slug }) => {
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
  );
};

export default Magazines;
