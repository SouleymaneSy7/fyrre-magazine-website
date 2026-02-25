import { HeaderMarquee } from "@/constants/marqueeConstants";

import Marquee from "@/components/layouts/Marquee";
import Headline from "@/components/layouts/Headline";
import Container from "@/components/common/Container";
import HomepageHero from "@/components/layouts/HomepageHero";
import LinkWithArrow from "@/components/layouts/LinkWithArrow";
import HomepageSidebar from "@/components/layouts/HomepageSidebar";
import HomepageAuthorList from "@/components/layouts/HomepageAuthorList";
import HomepagePodcastList from "@/components/layouts/HomepagePodcastList";
import HomepageMagazineList from "@/components/layouts/HomepageMagazineList";

export default function Home() {
  return (
    <main
      role="main"
      id="main-content"
      aria-labelledby="main-content"
      className="container"
    >
      <Headline
        imageSrc="/assets/svgs/headline-art-life.svg"
        altText="art life headline text svg illustration"
      />

      <div className="mb-5 lg:mb-8">
        <Marquee title="News:" marqueeText={HeaderMarquee} />
      </div>

      <HomepageHero />

      <Container
        as="section"
        className="grid gap-24 lg:grid-cols-3 lg:grid-rows-1 mb-14 md:mb-20 lg:mb-24"
      >
        <HomepageMagazineList />
        <HomepageSidebar />
      </Container>

      <div className="mb-14 md:mb-20 lg:mb-24 ">
        <LinkWithArrow linkHref={"/magazine"} linkTitle="All Articles" />
      </div>

      <HomepagePodcastList />

      <HomepageAuthorList />
    </main>
  );
}
