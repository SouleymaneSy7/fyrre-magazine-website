import Link from "next/link";
import Image from "next/image";

import Card from "../common/Card";
import Title from "../common/Title";
import Button from "../common/Button";
import Container from "../common/Container";

import { homepageMagazineSummaryList } from "@/constants";

const HomepageMagazineList = () => {
  return (
    <Container as={"div"}>
      {homepageMagazineSummaryList.map((item) => {
        return (
          <Card
            key={item.id}
            className="flex flex-col gap-4 mb-8 pb-8 border-b border-b-primary-clr nth-last-[1]:border-b-0 nth-last-[1]:pb-0 nth-last-[1]:mb-0 md:flex-row md:gap-6 lg:mb-12 lg:pb-12 lg:gap-8"
          >
            <Link href={item.postLink} className="w-full h-full block">
              <Image
                width={500}
                height={500}
                src={item.coverImage}
                alt={`${item.title} - magazine cover.`}
                className="w-full h-full aspect-square object-cover"
              />
            </Link>

            <div className="lg:flex lg:flex-col lg:justify-between">
              <div className=" mb-4">
                <Title level="h2" className="heading-3">
                  {item.title}
                </Title>
                <p>{item.preview}</p>
              </div>

              <div className="flex flex-col gap-4 mt-8 lg:flex-row lg:justify-between lg:items-center">
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-6">
                  <div className="flex gap-2">
                    <strong>Text</strong>
                    <Link href={item.authorLink} className="text-link">
                      <span>{item.author}</span>
                    </Link>
                  </div>

                  <div className="flex gap-2">
                    <strong>Date</strong>
                    <span>{item.date}</span>
                  </div>

                  <div className="flex gap-2">
                    <strong>Read</strong>
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <div>
                  <Button variant="label" size="label">
                    {item.tag}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </Container>
  );
};

export default HomepageMagazineList;
