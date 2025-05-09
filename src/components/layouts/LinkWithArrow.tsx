import * as React from "react";
import Link from "next/link";
import clsx from "clsx";

import { ArrowRightIcon } from "@/icons/Icons.component";
import { LinkWithArrowPropsType } from "@/types";

const LinkWithArrow: React.FC<LinkWithArrowPropsType> = ({
  Icon = ArrowRightIcon,
  linkHref,
  linkTitle,
  classNames,
}) => {
  return (
    <Link
      href={linkHref}
      className={clsx("flex gap-x-small items-center", classNames)}
    >
      <span className="text-text-default-clr font-semi-bold uppercase">
        {linkTitle}
      </span>

      <Icon />
    </Link>
  );
};

export default LinkWithArrow;
