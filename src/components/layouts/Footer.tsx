import * as React from "react";
import Link from "next/link";

import {
  socialIcons,
  FooterHeading,
  FooterLinkList1,
  FooterLinkList2,
  FooterLinkList3,
} from "@/constants";
import { LogoIcon } from "@/icons/Icons.component";
import { FooterMarquee } from "@/constants/marqueeConstants";

import Marquee from "./Marquee";
import List from "../common/List";
import Form from "../common/Form";
import Title from "../common/Title";
import Inputs from "../common/Input";
import Button from "../common/Button";
import VisuallyHidden from "../common/VisuallyHidden";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-clr">
      <Marquee marqueeText={FooterMarquee} />
      <section className="container | text-text-inversed-clr py-x-huge space-y-x-huge lg:space-y-24 lg:pt-32">
        <div className="flex flex-col gap-x-large lg:flex-row lg:items-center lg:justify-between mb-32">
          <div className="w-full max-w-[832px]">
            <Title level="h2" className="heading-medium uppercase">
              {FooterHeading}
            </Title>
          </div>

          <Form className="w-full flex flex-col gap-3 lg:max-w-[480px]  lg:flex-row lg:gap-4">
            <Inputs
              type="email"
              placeholder="Email"
              className="form-input | lg:max-w-[360px] bg-default-clr text-text-muted-clr"
            />
            <Button
              variant="default"
              className="bg-default-clr text-primary-clr"
            >
              Sign Up
            </Button>
          </Form>
        </div>

        <div className="flex flex-col gap-x-large lg:flex-row lg:items-start lg:justify-between">
          <Link href={"/"}>
            <LogoIcon fill="#fff" />
            <VisuallyHidden>Fyrre magazine logo</VisuallyHidden>
          </Link>
          <hr className="lg:hidden bg-text-muted-clr" />

          <div className="space-y-4 w-full lg:max-w-[300px]">
            <hr className="hidden lg:block bg-text-muted-clr" />
            <List
              items={FooterLinkList1}
              renderItem={(item) => {
                return (
                  <li key={item.id} className="py-2">
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                );
              }}
            />
            <hr className="lg:hidden bg-text-muted-clr" />
          </div>

          <div className="space-y-4 w-full lg:max-w-[300px]">
            <hr className="hidden lg:block  bg-text-muted-clr" />
            <List
              items={FooterLinkList2}
              renderItem={(item) => {
                return (
                  <li key={item.id} className="py-2">
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                );
              }}
            />
            <hr className="lg:hidden bg-text-muted-clr" />
          </div>

          <div className="space-y-4 w-full lg:max-w-[300px]">
            <hr className="hidden lg:block bg-text-muted-clr" />
            <List
              items={FooterLinkList3}
              renderItem={(item) => {
                return (
                  <li key={item.id} className="py-2">
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                );
              }}
            />
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:flex lg:items-center lg:gap-5">
            <p>
              © Design by{" "}
              <a href={"https://gola.io"} className="text-link" target="_blank">
                Pawel Gola
              </a>
            </p>

            <p>
              Code by{" "}
              <a
                href={"https://github.com/souleymanesy7"}
                className="text-link"
                target="_blank"
              >
                Souleymane Sy
              </a>
            </p>
          </div>

          <div>
            <List
              items={socialIcons}
              className="flex items-center gap-2"
              renderItem={(item) => {
                const Icon = item.Icon;

                return (
                  <li key={item.id}>
                    <Link href={item.href}>
                      <Icon width={24} height={24} fill="#fff" />
                    </Link>
                  </li>
                );
              }}
            />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
