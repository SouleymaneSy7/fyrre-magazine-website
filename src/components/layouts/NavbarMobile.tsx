import * as React from "react";
import Link from "next/link";

import clsx from "clsx";
import FocusLock from "react-focus-lock";

import List from "../common/List";
import Container from "../common/Container";
import useOnDisabledBodyScroll from "@/hooks/useOnDisabledBodyScroll";

import { ArrowRightIcon } from "@/icons/Icons.component";
import { NavbarMobilePropsType } from "@/types";
import { navbarMobileList } from "@/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const NavbarMobile: React.FC<NavbarMobilePropsType> = ({
  isOpen,
  handleClick,
}) => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  isMobile ? useOnDisabledBodyScroll(isOpen) : useOnDisabledBodyScroll(false);

  return (
    <React.Fragment>
      <FocusLock returnFocus={true}>
        <Container
          as={"div"}
          className={clsx(
            "container | lg:hidden absolute top-0 left-0 z-10 -translate-y-[100%] bg-default-clr w-full pb-2 transition-transform duration-500 ease-in-out",
            isOpen && "translate-y-[77px]"
          )}
        >
          <List
            items={navbarMobileList}
            renderItem={(item) => {
              return (
                <li
                  key={item.id}
                  id="mobile-navigation-link"
                  className="border-b border-primary-clr"
                  role="listitem"
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-3"
                    onClick={handleClick}
                  >
                    <span className="uppercase font-medium">{item.title}</span>
                    <ArrowRightIcon />
                  </Link>
                </li>
              );
            }}
          />
        </Container>
      </FocusLock>
    </React.Fragment>
  );
};

export default NavbarMobile;
