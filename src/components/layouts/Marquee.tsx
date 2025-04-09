"use client";

import * as React from "react";

export type MarqueeAnimationType = (
  element: HTMLElement,
  elementWidth: number,
  windowWidth: number
) => void;

export type MarqueePropsType = {
  marqueeText: string[];
};

const marqueeAnimation: MarqueeAnimationType = (
  element,
  elementWidth,
  windowWidth
) => {
  element.animate(
    [
      { transform: "translateX(0)" },
      { transform: `translateX(${windowWidth - elementWidth}px)` },
    ],
    {
      duration: 10000,
      easing: "linear",
      direction: "normal",
      iterations: Infinity,
    }
  );
};

const Marquee: React.FC<MarqueePropsType> = ({ marqueeText }) => {
  const marqueeElementRef = React.useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = React.useState<number>(0);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);

    if (marqueeElementRef.current) {
      const elementWidth =
        marqueeElementRef.current.getBoundingClientRect().width;
      marqueeAnimation(
        marqueeElementRef.current as HTMLElement,
        elementWidth,
        windowWidth
      );
    }

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <div className="relative overflow-x-hidden bg-[var(--primary-clr)]">
      <div
        id="marquee"
        className="w-max whitespace-nowrap p-5 lg:p-7"
        ref={marqueeElementRef}
      >
        <div className="flex gap-8 lg:gap-24">
          {marqueeText.map((name: string, index: number) => (
            <span
              key={index}
              className="flex items-center text-lg text-[var(--text-inversed-clr)] lg:text-base"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
