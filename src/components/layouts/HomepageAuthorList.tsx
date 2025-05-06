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

      <div className="home-authors-grid | pt-px pl-px">
        {homepageAuthorsList.map(
          ({ id, city, image, job, name, authorHref }) => {
            return (
              <Card
                key={id}
                className="flex gap-8 flex-wrap items-center p-8 border border-primary-clr -ml-px -mt-px"
              >
                <Link
                  href={`/authors/${authorHref}`}
                  className="inline-block w-[150px] h-[150px] rounded-full overflow-hidden md:w-[80px] md:h-[80px] lg:w-[150px] lg:h-[150px]"
                >
                  <Image
                    src={image}
                    alt={`${name} - profile image.`}
                    width={500}
                    height={500}
                    className="w-full h-full aspect-square object-cover"
                  />
                </Link>

                <div>
                  <Link href={`/authors/${authorHref}`}>
                    <Title level="h3" className="heading-3 mb-4">
                      {name}
                    </Title>
                  </Link>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <strong>Job</strong>
                      <span>{job}</span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <strong>City</strong>
                      <span>{city}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          }
        )}
      </div>
    </Container>
  );
};

export default HomepageAuthorList;
