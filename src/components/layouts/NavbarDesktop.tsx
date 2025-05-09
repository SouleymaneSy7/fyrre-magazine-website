import * as React from "react";
import Link from "next/link";

import Container from "../common/Container";
import VisuallyHidden from "../common/VisuallyHidden";

import List from "../common/List";
import { LogoIcon } from "@/icons/Icons.component";
import { navbarList, socialIcons } from "@/constants";

const NavbarDesktop = () => {
  return (
    <Container
      as={"div"}
      className="lg:flex lg:justify-between lg:items-center hidden"
    >
      <Link href={"/"}>
        <LogoIcon />
        <VisuallyHidden>Fyrre magazine logo</VisuallyHidden>
      </Link>

      <Container as="ul" className="flex items-center gap-4 lg:gap-6">
        <List
          items={navbarList}
          className="flex items-center md:gap-4 lg:gap-6"
          renderItem={(item) => {
            return (
              <li key={item} role="listitem">
                <Link
                  href={`/${item}`}
                  className="capitalize md:text-fs-text-regular lg:text-fs-text-large"
                >
                  {item}
                </Link>
              </li>
            );
          }}
        />

        <span className="inline-block w-4 h-[1px] bg-primary-clr"></span>

        <List
          items={socialIcons}
          className="flex items-end gap-2 lg:gap-4"
          renderItem={(item) => {
            const Icon = item.Icon;

            return (
              <li key={item.id} role="listitem">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`follow us on ${item.title}`}
                  title={`follow us on ${item.title}`}
                >
                  <Icon width={22} height={22} />
                  <VisuallyHidden>follow us on {item.title}</VisuallyHidden>
                </a>
              </li>
            );
          }}
        />
      </Container>
    </Container>
  );
};

export default NavbarDesktop;
