"use client";

import * as React from "react";
import { SkiptToContentsPropsType } from "@/types";

const SkipToContent: React.FC<SkiptToContentsPropsType> = ({ classNames }) => {
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

  React.useEffect(() => {
    const skipLink = document.getElementById("skip-to-content-link");
    if (skipLink) {
      document.body.insertAdjacentElement("afterbegin", skipLink);
    }
  }, []);

  return (
    <a
      id="skip-to-content-link"
      href="#main-content"
      className={`
        fixed top-4 left-4 z-50 ${classNames}
        ${isVisible ? "transform translate-y-0" : "transform -translate-y-20"}
      `}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      Go to main content.
    </a>
  );
};

export default SkipToContent;
