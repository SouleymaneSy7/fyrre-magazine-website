import * as React from "react";
import Link from "next/link";

import { ArrowRightIcon } from "@/icons/Icons.component";
import { LinkWithArrowPropsType } from "@/types";


const LinkWithArrow: React.FC<LinkWithArrowPropsType> = ({
  Icon = ArrowRightIcon,
  linkHref,
  linkTitle,
}) => {
  return (
    <Link href={linkHref}>
      <span>{linkTitle}</span>
      <Icon />
    </Link>
  );
};

export default LinkWithArrow;
