import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";

import { cn } from "@/libs/utils";

interface ButtonPropsType
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

const buttonStyles = cva({
  base: [
    "whitespace-nowrap",
    "inline-flex items-center justify-center",
    "text-sm font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer",
  ],
  variants: {
    variant: {
      default:
        "bg-blue-700 text-white hover:bg-blue-800 focus-visible:ring-blue-300",
      destructive:
        "bg-red-700 text-white hover:bg-red-800 focus-visible:ring-red-300",
      outline:
        "border border-gray-900 text-dark-900 bg-white hover:bg-gray-900 hover:text-white",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
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
