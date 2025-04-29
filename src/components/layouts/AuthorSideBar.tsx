import * as React from "react";
import Image from "next/image";

import { AuthorSideBarPropsType } from "@/types";

import List from "../common/List";
import Container from "../common/Container";

const AuthorSideBar: React.FC<AuthorSideBarPropsType> = ({
  imageSrc,
  authorJob,
  authorCity,
  authorSocials,
}) => {
  return (
    <Container as={"aside"}>
      <div>
        <Image
          width={100}
          height={100}
          src={imageSrc}
          alt="avatar profile image"
        />
      </div>

      <div>
        <p>Follow</p>

        <List
          items={authorSocials}
          renderItem={(item) => {
            const Icon = item.Icon;

            return (
              <li key={item.id}>
                <a href={item.href} target="_blank">
                  <Icon />
                </a>
              </li>
            );
          }}
        />
      </div>

      <div>
        <p>
          <strong>Job</strong>
          <span>{authorJob}</span>
        </p>

        <p>
          <strong>City</strong>
          <span>{authorCity}</span>
        </p>
      </div>
    </Container>
  );
};

export default AuthorSideBar;
