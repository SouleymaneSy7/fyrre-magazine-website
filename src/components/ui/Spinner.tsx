import * as React from "react";
import clsx from "clsx";

import VisuallyHidden from "../common/VisuallyHidden";
import { SpinnerSizeType, SpinnerPropsType } from "@/types";

const sizeMap: Record<SpinnerSizeType, { wrapper: string; bar: string }> = {
  sm: {
    wrapper: "w-3 h-3 gap-[2px]",
    bar: "w-[2px]",
  },
  md: {
    wrapper: "w-4 h-4 gap-[3px]",
    bar: "w-[2.5px]",
  },
  lg: {
    wrapper: "w-6 h-6 gap-1",
    bar: "w-[3px]",
  },
};

const Spinner: React.FC<SpinnerPropsType> = ({
  size = "sm",
  variant = "default",
  label = "Loading...",
  className,
}) => {
  const { wrapper, bar } = sizeMap[size];

  const barColor = variant === "inversed" ? "bg-default-clr" : "bg-primary-clr";

  return (
    <span
      role="status"
      aria-label={label}
      className={clsx(
        "inline-flex items-end justify-center",
        wrapper,
        className,
      )}
    >
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={clsx(
            "rounded-none h-full animate-spinner-bar",
            bar,
            barColor,
          )}
          style={{
            animationDelay: `${i * 100}ms`,
          }}
        />
      ))}
      <VisuallyHidden>{label}</VisuallyHidden>
    </span>
  );
};

export default Spinner;
