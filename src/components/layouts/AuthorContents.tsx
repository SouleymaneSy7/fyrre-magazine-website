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
    <Container as={"div"} className="col-span-2">
      <Title
        level="h2"
        className="heading-medium uppercase mb-5 md:mb-6 lg:mb-8"
      >
        {authorName}
      </Title>

      <div className="mdx-content-container">
        <MDXRemote source={MDXContent} />
      </div>
    </Container>
  );
};

export default AuthorContents;
