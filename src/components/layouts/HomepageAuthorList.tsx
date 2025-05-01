import Image from "next/image";

import Card from "../common/Card";
import Title from "../common/Title";
import Container from "../common/Container";
import LinkWithArrow from "./LinkWithArrow";

import { homepageAuthorsList } from "@/constants";

const HomepageAuthorList = () => {
  return (
    <Container as={"section"}>
      <div>
        <Title level="h2">Authors</Title>
        <LinkWithArrow linkHref={"/authors"} linkTitle={"All Authors"} />
      </div>

      <div>
        {homepageAuthorsList.map(({ id, city, image, job, name }) => {
          return (
            <Card key={id}>
              <div>
                <Image
                  src={image}
                  alt={`${name} - profile image.`}
                  width={100}
                  height={100}
                />
              </div>

              <div>
                <Title level="h3">{name}</Title>

                <div>
                  <strong>Job</strong>
                  <span>{job}</span>
                </div>

                <div>
                  <strong>City</strong>
                  <span>{city}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default HomepageAuthorList;
