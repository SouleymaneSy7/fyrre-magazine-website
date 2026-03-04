"use client";

import * as React from "react";

import { gsap } from "gsap";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LenisProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  React.useEffect(() => {
    gsap.ticker.add(() => {
      ScrollTrigger.update();
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(() => ScrollTrigger.update());
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
