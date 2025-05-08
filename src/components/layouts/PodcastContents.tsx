import * as React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import Title from "../common/Title";
import Container from "../common/Container";

export type PodcastContentsPropsType = {
  podcastEpisode: number;
  podcastTitle: string;
  MDXContent: string;
};

const PodcastContents: React.FC<PodcastContentsPropsType> = ({
  MDXContent,
  podcastEpisode,
  podcastTitle,
}) => {
  return (
    <Container as={"div"} className="col-span-2">
      <Title level="h3" className="heading-5 uppercase mb-4">
        Episode {`0${podcastEpisode}`}
      </Title>

      <Title level="h1" className="heading-1 uppercase mb-5 md:mb-6 lg:mb-8">
        {podcastTitle}
      </Title>

      <div className="mdx-content-container">
        <MDXRemote source={MDXContent} />
      </div>
    </Container>
  );
};

export default PodcastContents;
