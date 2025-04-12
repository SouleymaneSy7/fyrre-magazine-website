"use client";

import * as React from "react";
import { MarqueePropsType } from "@/types";

const Marquee: React.FC<MarqueePropsType> = ({ marqueeText, title }) => {
  if (!title) {
    return (
      <div className="relative w-full overflow-x-hidden bg-primary-clr py-4">
        <div
          id="marquee"
          className="w-max whitespace-nowrap overflow-clip marquee-fade-out-horizontal"
        >
          <div className="flex items-center gap-8 lg:gap-24 bg-transparent marquee-text-track">
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
    <div className="relative w-full flex items-center gap-8 overflow-x-hidden bg-primary-clr">
      <div className="p-5">
        <h2 className="text-fs-paragraph uppercase text-text-inversed-clr font-semi-bold">
          {title}
        </h2>
      </div>

      <div
        id="marquee"
        className="w-max whitespace-nowrap p-5 overflow-clip marquee-fade-out-horizontal"
      >
        <div className="flex items-center gap-8 bg-transparent marquee-text-track">
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
