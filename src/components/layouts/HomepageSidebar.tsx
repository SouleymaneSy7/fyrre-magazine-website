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
    <Container as={"aside"}>
      <div>
        <p>PrintMagazine</p>

        <h3>03 / 2022</h3>

        <div>
          <Image
            width={100}
            height={100}
            alt="cover image"
            src="/assets/images/cover-image.jpeg"
          />
        </div>

        <Button variant="default" size="default">
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
