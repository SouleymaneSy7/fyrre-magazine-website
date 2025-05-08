import * as React from "react";
import Container from "../common/Container";
import { MDXRemote } from "next-mdx-remote/rsc";

export type MagazinePostContentsPropsType = {
  MDXContent: string;
};

const MagazinePostContents: React.FC<MagazinePostContentsPropsType> = ({
  MDXContent,
}) => {
  return (
    <Container as={"div"} className="col-span-2">
      <MDXRemote source={MDXContent} />
    </Container>
  );
};

export default MagazinePostContents;
