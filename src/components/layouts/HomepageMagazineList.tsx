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
          <Card key={item.id}>
            <Link href={item.postLink}>
              <Image
                width={100}
                height={100}
                src={item.coverImage}
                alt={`${item.title} - magazine cover.`}
              />
            </Link>

            <div>
              <Title level="h2">{item.title}</Title>
              <p>{item.preview}</p>

              <div>
                <div>
                  <p>
                    <strong>Text</strong>
                    <Link href={item.authorLink}>
                      <span>{item.author}</span>
                    </Link>
                  </p>

                  <p>
                    <strong>Date</strong>
                    <span>{item.date}</span>
                  </p>

                  <p>
                    <strong>Read</strong>
                    <span>{item.readTime}</span>
                  </p>
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
