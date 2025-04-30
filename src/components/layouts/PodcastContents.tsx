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
    <Container as={"div"}>
      <Title level="h3">Episode {`0${podcastEpisode}`}</Title>

      <Title level="h1">{podcastTitle}</Title>

      <div>
        <MDXRemote source={MDXContent} />
      </div>
    </Container>
  );
};

export default PodcastContents;
