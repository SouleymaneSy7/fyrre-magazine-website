import * as React from "react";

import Container from "../common/Container";
import MagazineSummaryCard from "./MagazineSummaryCard";
import { magazineLatestPost } from "@/constants/magazineConstants";

const MagazineLatestArticles = () => {
  return (
    <Container as={"div"} className="homepage-podcast-grid pt-px pl-px">
      {magazineLatestPost.map(
        ({ id, author, coverImage, date, preview, readTime, tag, title }) => {
          return (
            <MagazineSummaryCard
              key={id}
              magazineSlug={""}
              magazineDate={date}
              magazineTag={tag}
              magazineCover={coverImage}
              magazineTitle={title}
              magazinePreview={preview}
              magazineAuthor={author}
              magazineAuthorLink={author}
              magazineReadTime={readTime}
            />
          );
        }
      )}
    </Container>
  );
};

export default MagazineLatestArticles;
