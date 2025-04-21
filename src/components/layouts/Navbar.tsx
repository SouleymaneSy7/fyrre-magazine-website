"use client";

import * as React from "react";
import Link from "next/link";

import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import Container from "../common/Container";
import VisuallyHidden from "../common/VisuallyHidden";

import { LogoIcon } from "@/icons/Icons.component";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="border-border-default-clr z-50 pb-5 overflow-hidden border-b"
      role="navigation"
    >
      <Container
        as="div"
        className="lg:hidden flex items-center justify-between z-50"
      >
        <Link href={"/"}>
          <LogoIcon />
          <VisuallyHidden>Fyrre magazine logo</VisuallyHidden>
        </Link>

        <button
          type="button"
          className="cursor-pointer | hamburger-btn"
          onClick={handleIsOpen}
          aria-expanded={isOpen}
          aria-controls="menu"
        >
          <span
            className={
              isOpen
                ? "hamburger-menu hamburger-menu--top | opacity-100 rotate-45 translate-x-[3px] translate-y-[0px]"
                : "hamburger-menu hamburger-menu--top"
            }
          ></span>
          <span
            className={
              isOpen
                ? "hamburger-menu hamburger-menu--center | opacity-0 rotate-0 scale-x-20 scale-y-20  "
                : "hamburger-menu hamburger-menu--center"
            }
          ></span>
          <span
            className={
              isOpen
                ? "hamburger-menu hamburger-menu--bottom | opacity-100 -rotate-45 translate-x-[4px] translate-y-[4px]"
                : "hamburger-menu hamburger-menu--bottom"
            }
          ></span>
          <VisuallyHidden>Open & Close the mobile navigation</VisuallyHidden>
        </button>

        <NavbarMobile isOpen={isOpen} />
      </Container>

      <NavbarDesktop />
    </nav>
  );
};

export default Navbar;
