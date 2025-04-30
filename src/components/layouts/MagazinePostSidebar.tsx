import * as React from "react";
import Image from "next/image";

import List from "../common/List";
import Title from "../common/Title";
import Container from "../common/Container";

import { MagazinePostSidebarPropsType } from "@/types";

const MagazinePostSidebar: React.FC<MagazinePostSidebarPropsType> = ({
  magazineAuthorImage,
  magazineAuthorName,
  magazineDate,
  magazineReadTime,
  magazineSocials,
}) => {
  return (
    <Container as={"aside"}>
      <div>
        <div>
          <Image
            src={magazineAuthorImage}
            alt={`${magazineAuthorName} - author profile image.`}
            width={100}
            height={100}
          />
        </div>

        <Title level="h2">{magazineAuthorName}</Title>
      </div>

      <div>
        <p>
          <strong>Date</strong>
          <span>{magazineDate}</span>
        </p>

        <p>
          <strong>Read</strong>
          <span>{magazineReadTime}</span>
        </p>

        <div>
          <p>
            <strong>Share</strong>
          </p>

          <List
            items={magazineSocials}
            renderItem={(item) => {
              const Icon = item.Icon;

              return (
                <li key={item.id}>
                  <a href={item.href} target="_blank" title={item.name}>
                    <Icon />
                  </a>
                </li>
              );
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default MagazinePostSidebar;
