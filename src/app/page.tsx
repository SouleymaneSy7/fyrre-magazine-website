import * as React from "react";
import Marquee from "@/components/layouts/Marquee";

const marqueeText = [
  "html",
  "css",
  "javascript",
  "React",
  "Vue",
  "Svelte",
  "Angular",
  "Typescript",
  "Astro",
  "NextJs",
  "NuxtJs",
  "TailwindCss",
  "Bootstrap",
  "MaterialUi",
  "ChakraUi",
  "AntDesign",
  "Figma",
  "AdobeXd",
  "AdobeIllustrator",
  "AdobePhotoshop",
  "AdobeAfterEffects",
  "AdobePremierePro",
  "AdobeInDesign",
  "AdobeLightroom",
  "AdobeXD",
  "AdobeFresco",
  "AdobeDimension",
  "AdobeAnimate",
  "AdobeAudition",
  "AdobeCharacterAnimator",
];

export default function Home() {
  return (
    <div className="space-y-3 my-4">
      <Marquee marqueeText={marqueeText} />
      <Marquee marqueeText={marqueeText} title="News:" />
    </div>
  );
}
