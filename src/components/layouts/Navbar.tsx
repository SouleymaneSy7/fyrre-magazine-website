"use client";

import * as React from "react";
import Link from "next/link";

import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import Container from "../common/Container";
import VisuallyHidden from "../common/VisuallyHidden";

import { LogoIcon } from "@/icons/Icons.component";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <nav
        className="border-border-default-clr relative z-50 pb-5 border-b"
        role="navigation"
      >
        <Container
          as="div"
          className="lg:hidden z-50 flex items-center justify-between"
        >
          <Link href={"/"}>
            <LogoIcon />
            <VisuallyHidden>Fyrre magazine logo</VisuallyHidden>
          </Link>

          <HamburgerMenu isOpen={isOpen} onClick={handleIsOpen} />
        </Container>

        <NavbarDesktop />
      </nav>

      <NavbarMobile isOpen={isOpen} />
    </React.Fragment>
  );
};

export default Navbar;
