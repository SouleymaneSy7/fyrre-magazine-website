import { HeaderMarquee } from "@/constants/marqueeConstants";

import Container from "@/components/common/Container";
import HomepageAuthorList from "@/components/sections/homepage/HomepageAuthorList";
import HomepageHero from "@/components/sections/homepage/HomepageHero";
import HomepageMagazineList from "@/components/sections/homepage/HomepageMagazineList";
import HomepagePodcastList from "@/components/sections/homepage/HomepagePodcastList";
import HomepageSidebar from "@/components/sections/homepage/HomepageSidebar";
import Headline from "@/components/ui/Headline";
import LinkWithArrow from "@/components/ui/LinkWithArrow";
import Marquee from "@/components/ui/Marquee";

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
