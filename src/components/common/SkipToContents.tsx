"use client";

import * as React from "react";
import clsx from "clsx";
import VisuallyHidden from "./VisuallyHidden";

const SkipToContent = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleFocus = () => setIsVisible(true);
  const handleBlur = () => setIsVisible(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const mainContent = document.getElementById("main-content");

      if (mainContent) {
        mainContent.setAttribute("tabindex", "-1");
        mainContent.focus();

        setTimeout(() => {
          mainContent.removeAttribute("tabindex");
        }, 100);
      }
    }
  };

  React.useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const skipLink = document.getElementById("skip-to-content-link");
      if (skipLink) {
        document.body.insertAdjacentElement("afterbegin", skipLink);
      }
    }
  }, []);

  return (
    <a
      id="skip-to-content-link"
      href="#main-content"
      className={clsx(`fixed top-4 left-4 z-[99999] bg-primary-clr rounded-none font-medium uppercase tracking-widest text-fs-text-small text-text-inversed-clr focus-visible:ring-primary-clr focus-visible:ring-rounded-none py-3 px-5 transition-transform duration-300 ease-in-out
        ${isVisible ? "transform translate-y-0" : "transform -translate-y-50"}
      `)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      Go to main content.
      <VisuallyHidden>Go to main content.</VisuallyHidden>
    </a>
  );
};

export default SkipToContent;
