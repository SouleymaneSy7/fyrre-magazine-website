import Marquee from "@/components/layouts/Marquee";
import Headline from "@/components/layouts/Headline";
import { HeaderMarquee } from "@/constants/marqueeConstants";
import Container from "@/components/common/Container";
import HomepageHero from "@/components/layouts/HomepageHero";
import HomepageMagazineList from "@/components/layouts/HomepageMagazineList";
import HomepageSidebar from "@/components/layouts/HomepageSidebar";

export default function Home() {
  return (
    <main id="main-content" className="container">
      <Headline
        imageSrc="/assets/svgs/headline-art-life.svg"
        altText="art life headline text svg illustration"
      />

      <Marquee title="News:" marqueeText={HeaderMarquee} />

      <HomepageHero />

      <Container as="section">
        <HomepageMagazineList />
        <HomepageSidebar />
      </Container>
    </main>
  );
}
