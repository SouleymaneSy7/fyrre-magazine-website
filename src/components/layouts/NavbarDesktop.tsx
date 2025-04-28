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

      <Container as="ul" className="flex items-center gap-4">
        <List
          items={navbarList}
          className="flex items-center gap-4"
          renderItem={(item) => {
            return (
              <li key={item}>
                <Link href={`/${item}`} className="capitalize">
                  {item}
                </Link>
              </li>
            );
          }}
        />

        <span className="inline-block w-4 h-[1px] bg-primary-clr"></span>

        <List
          items={socialIcons}
          className="flex items-end gap-2"
          renderItem={(item) => {
            const Icon = item.Icon;

            return (
              <li key={item.id}>
                <Link href={item.href}>
                  <Icon width={20} height={20} />
                </Link>
              </li>
            );
          }}
        />
      </Container>
    </Container>
  );
};

export default NavbarDesktop;
