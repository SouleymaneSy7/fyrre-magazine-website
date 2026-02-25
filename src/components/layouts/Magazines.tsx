"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { usePagination } from "@/hooks/usePagination";

import Container from "../common/Container";
import Pagination from "./Pagination";
import MagazineSummaryCard from "./MagazineSummaryCard";
import { ArticleDataType, MagazinesPropsType } from "@/types";

const ARTICLES_PER_PAGE = 6;

const Magazines: React.FC<MagazinesPropsType> = ({ magazines }) => {
  const params = useSearchParams();
  const category = params.get("category");

  const filteredMagazine = React.useMemo(() => {
    if (category === "all") return magazines;
    if (category) {
      return magazines.filter(
        (item: ArticleDataType) => item.frontmatter.tag === category,
      );
    }
    return magazines;
  }, [magazines, category]);

  const {
    paginatedItems,
    currentPage,
    totalPages,
    goToPrev,
    goToNext,
    isFirstPage,
    isLastPage,
  } = usePagination(filteredMagazine, ARTICLES_PER_PAGE);

  return (
    <React.Fragment>
      <Container as={"section"} className="homepage-podcast-grid pt-px pl-px">
        {paginatedItems.map(({ frontmatter, slug }) => (
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
        ))}
      </Container>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={goToPrev}
        onNext={goToNext}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </React.Fragment>
  );
};

export default Magazines;
