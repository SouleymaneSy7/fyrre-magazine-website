import * as React from "react";
import Headline from "@/components/layouts/Headline";

const page: React.FC = () => {
  return (
    <main id="main-content" className="container">
      <Headline
        imageSrc="/assets/svgs/headline-podcast.svg"
        altText="podcast headline text svg illustration"
      />
    </main>
  );
};

export default page;
