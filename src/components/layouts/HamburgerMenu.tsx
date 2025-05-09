import React from "react";
import clsx from "clsx";

import { HamburgerMenuPropsType } from "@/types";
import VisuallyHidden from "../common/VisuallyHidden";

const HamburgerMenu: React.FC<HamburgerMenuPropsType> = ({
  isOpen,
  onClick,
  classNames,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-controls="menu"
      aria-expanded={isOpen}
      aria-label={
        isOpen ? "Close the Navigation Menu" : "Open the Navigation menu"
      }
      className={clsx(
        "flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "focus-visible:ring-primary-clr transition-all duration-200 ease-in-out",
        classNames
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          "w-8 h-1 bg-current rounded-2xl transition-all duration-500 ease-in-out",
          isOpen && "translate-y-[10px] rotate-45"
        )}
      />
      <span
        aria-hidden="true"
        className={clsx(
          "w-8 h-1 bg-current rounded-2xl transition-all duration-500 ease-in-out",
          isOpen && "opacity-0"
        )}
      />
      <span
        aria-hidden="true"
        className={clsx(
          "w-8 h-1 bg-current rounded-2xl transition-all duration-500 ease-in-out",
          isOpen && "-translate-y-[10px] -rotate-45"
        )}
      />
      <VisuallyHidden>
        {isOpen ? "Close the navigation menu." : "Open the navigation menu."}
      </VisuallyHidden>
    </button>
  );
};

export default HamburgerMenu;
