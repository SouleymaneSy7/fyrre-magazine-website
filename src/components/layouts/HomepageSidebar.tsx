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
    <Container as={"aside"} className="col-span-2 md:hidden lg:block lg:col-span-1">
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
            className="w-full h-full aspect-auto"
            sizes="(max-width: 479px) 90vw, (max-width: 991px) 100vw, 18vw"
          />
        </div>

        <Button variant="default" size="default" className="w-full">
          Buy Now
        </Button>
      </div>

      <div className="mt-8 mb-8 md:mt-12 md:mb-12 lg:mt-16 lg:mb-16">
        <Title level="h2" className="heading-6 uppercase mb-5 md:mb-6 lg:mb-8">
          Popular Posts
        </Title>

        <div>
          {homepagePopularPostList.map(
            ({ id, title, author, authorLink, listNumber, postLink }) => {
              return (
                <Card
                  key={id}
                  className="flex items-start gap-8 border-b border-b-primary-clr mb-5 pb-5 nth-last-[1]:border-b-0 nth-last-[1]:pb-0 nth-last-[1]:mb-0 md:mb-6 md:pb-6 lg:mb-8 lg:pb-8"
                >
                  <p className="heading-4 font-semi-bold">{listNumber}</p>

                  <div className="flex flex-col gap-4">
                    <Link href={postLink}>
                      <Title level="h3" className="heading-4 font-semi-bold">
                        {title}
                      </Title>
                    </Link>

                    <div className="flex items-center gap-2">
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

      <Card className="pt-7 px-8 pb-8 bg-muted-bg-clr">
        <Title level="h3" className="heading-6 uppercase mb-2">Newsletter</Title>

        <Title level="h2" className="heading-3 mb-4">{FooterHeading}</Title>

        <Form className="flex flex-col gap-2">
          <Inputs type="email" placeholder="Email" className="form-input | border-none bg-default-clr" />
          <Button variant="default">Sign Up</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default HomepageSidebar;
