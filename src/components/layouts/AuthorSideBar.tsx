import * as React from "react";
import Image from "next/image";

import { AuthorSideBarPropsType } from "@/types";

import List from "../common/List";
import Title from "../common/Title";
import Container from "../common/Container";

const AuthorSideBar: React.FC<AuthorSideBarPropsType> = ({
  imageSrc,
  authorJob,
  authorCity,
  authorSocials,
  authorName,
}) => {
  return (
    <Container as={"aside"} className="col-span-1">
      <div className="w-full h-auto rounded-full overflow-hidden ">
        <Image
          width={150}
          height={150}
          src={imageSrc}
          alt={`${authorName} - profile image.`}
          className="w-full h-full"
          priority
        />
      </div>

      <div className="flex justify-between items-center border-b border-t border-primary-clr py-4 my-5 md:my-6 lg:my-8">
        <Title level="h3" className="heading-5 uppercase">
          Follow
        </Title>

        <List
          items={authorSocials}
          className="flex items-center gap-3"
          renderItem={(item) => {
            const Icon = item.Icon;

            return (
              <li key={item.id}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              </li>
            );
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <strong>Job</strong>
          <span>{authorJob}</span>
        </div>

        <div className="flex items-center justify-between">
          <strong>City</strong>
          <span>{authorCity}</span>
        </div>
      </div>
    </Container>
  );
};

export default AuthorSideBar;
