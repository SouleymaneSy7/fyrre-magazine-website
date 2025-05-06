import Image from "next/image";

import Card from "../common/Card";
import Title from "../common/Title";
import Container from "../common/Container";
import LinkWithArrow from "./LinkWithArrow";

import { homepageAuthorsList } from "@/constants";
import Link from "next/link";
import { ArrowRightIcon } from "@/icons/Icons.component";

const HomepageAuthorList = () => {
  return (
    <Container as={"section"}>
      <div className="flex items-center justify-between pt-6 md:pt-10 lg:pt-12 border-t border-primary-clr mb-14 md:mb-20 lg:mb-24">
        <Title level="h2" className="heading-large uppercase">
          Authors
        </Title>

        <Link
          href={"/authors"}
          className="inline-block md:hidden lg:hidden xl:hidden"
        >
          <ArrowRightIcon />
        </Link>

        <LinkWithArrow
          linkHref={"/authors"}
          linkTitle={"All Authors"}
          classNames="hidden md:flex"
        />
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
