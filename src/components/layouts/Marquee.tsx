"use client";

import * as React from "react";
import { MarqueePropsType } from "@/types";

const Marquee: React.FC<MarqueePropsType> = ({ marqueeText, title }) => {
  if (!title) {
    return (
      <div className="bg-primary-clr lg:py-5 relative w-full py-4 overflow-x-hidden">
        <div className="marquee-fade-out-horizontal | overflow-clip  whitespace-nowrap w-max ">
          <div className="marquee-text-track | flex items-center gap-8 lg:gap-14 bg-transparent">
            {marqueeText.map((name: string, index: number) => (
              <span
                key={index}
                className="text-fs-paragraph text-text-inversed-clr"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary-clr lg:py-5 lg:pl-5 relative flex items-center w-full gap-8 py-4 pl-4 overflow-x-hidden">
      <div>
        <h2 className="text-fs-paragraph text-text-inversed-clr font-semi-bold uppercase">
          {title}
        </h2>
      </div>

      <div
        id="marquee"
        className="marquee-fade-out-horizontal | w-max whitespace-nowrap overflow-clip"
      >
        <div className="marquee-text-track | flex items-center gap-8 bg-transparent">
          {marqueeText.map((name: string, index: number) => (
            <span
              key={index}
              className="text-fs-paragraph text-text-inversed-clr"
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
