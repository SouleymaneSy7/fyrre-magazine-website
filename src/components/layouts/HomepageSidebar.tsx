import Link from "next/link";
import Image from "next/image";

import Card from "../common/Card";
import Form from "../common/Form";
import Title from "../common/Title";
import Inputs from "../common/Input";
import Button from "../common/Button";
import Container from "../common/Container";

import { FooterHeading, homepagePopularPostList } from "@/constants";

const HomepageSidebar = () => {
  return (
    <Container as={"aside"} className="md:hidden lg:block">
      <div>
        <div className="mb-5 lg:mb-6">
          <p className="heading-6 uppercase font-semi-bold">PrintMagazine</p>
          <h3 className="heading-2">03 / 2022</h3>
        </div>

        <div className="w-full h-full mb-4">
          <Image
            width={500}
            height={625}
            alt="cover image"
            src="/assets/images/cover-image.jpeg"
            className="w-full h-full aspect-square object-contain"
            sizes="(max-width: 479px) 90vw, (max-width: 991px) 100vw, 18vw"
          />
        </div>

        <Button variant="default" size="default" className="w-full">
          Buy Now
        </Button>
      </div>

      <div>
        <Title level="h2">Popular Posts</Title>

        <div>
          {homepagePopularPostList.map(
            ({ id, title, author, authorLink, listNumber, postLink }) => {
              return (
                <Card key={id}>
                  <p>{listNumber}</p>

                  <div>
                    <Link href={postLink}>
                      <Title level="h3">{title}</Title>
                    </Link>

                    <div>
                      <strong>Author</strong>

                      <Link href={authorLink} className="text-link">
                        <span>{author}</span>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            }
          )}
        </div>
      </div>

      <div>
        <Title level="h3">Newsletter</Title>

        <Title level="h2">{FooterHeading}</Title>

        <Form>
          <Inputs type="email" placeholder="Email" className="form-input" />
          <Button variant="default">Sign Up</Button>
        </Form>
      </div>
    </Container>
  );
};

export default HomepageSidebar;
