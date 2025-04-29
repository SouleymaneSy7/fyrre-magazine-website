import * as React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import Title from "../common/Title";
import Container from "../common/Container";
import { AuthorContentPropsType } from "@/types";

const AuthorContents: React.FC<AuthorContentPropsType> = ({
  authorName,
  MDXContent,
}) => {
  return (
    <Container as={"div"}>
      <Title level="h2">{authorName}</Title>

      <div>
        <MDXRemote source={MDXContent} />
      </div>
    </Container>
  );
};

export default AuthorContents;
