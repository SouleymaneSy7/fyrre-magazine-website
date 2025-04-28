import * as React from "react";
import Headline from "@/components/layouts/Headline";

const page: React.FC = () => {
  return (
    <main id="main-content" className="container">
      <Headline
        imageSrc="/assets/svgs/headline-magazine.svg"
        altText="magazine headline text svg illustration"
      />
    </main>
  );
};

export default page;
