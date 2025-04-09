import * as React from "react";

import { cn } from "@/libs/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";

interface ButtonPropsType
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

const buttonStyles = cva({
  base: [
    "whitespace-nowrap",
    "flex items-center justify-center",
    "uppercase",
    "transition-colors",
    "cursor-pointer",
  ],
  variants: {
    variant: {
      default:
        "bg-primary-clr rounded-none text-fs-text-small text-text-inversed-clr focus-visible:ring-primary-clr",
      plain:
        "flex gap-x-small bg-transparent text-text-default-clr font-semi-bold focus-visible:ring-primary-clr rounded-none p-0",
      label:
        "text-text-default-clr border border-border-default-clr bg-transparent rounded-full",
    },
    size: {
      default: "py-3 px-5",
      plain: "p-0",
      label: "py-2 px-3 text-fs-text-tiny ",
      sm: "py-3 px-5",
      lg: "py-4 px-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonPropsType>(
  ({ className, variant, size, asChild = false, ...delegatedProps }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        className={cn(buttonStyles({ variant, size, className }))}
        ref={ref}
        {...delegatedProps}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
