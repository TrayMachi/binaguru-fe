import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "flex flex-row items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-[12px] transition-all disabled:pointer-events-none  [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 md:[&_svg:not([class*='size-'])]:size-6 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "bg-tosca-500 max-md:text-[12px] max-md:leading-[16px] max-md:font-semibold md:text-s7 font-space hover:bg-tosca-600 pressed:bg-tosca-700 disabled:bg-tosca-800 disabled:text-tosca-400 text-white",
        secondary:
          "bg-tosca-100 max-md:text-[12px] max-md:leading-[16px] max-md:font-semibold text-s8 md:text-s7 font-space hover:bg-tosca-200 pressed:bg-tosca-300 disabled:bg-tosca-400 text-tosca-500",
        ghost:
          "bg-transparent border-[1px] border-tosca-500 max-md:text-[12px] max-md:leading-[16px] max-md:font-semibold md:text-s7 font-space hover:bg-tosca-050 pressed:bg-tosca-100 disabled:bg-transparent disabled:text-tosca-100 disabled:border-blue-100 text-tosca-500",
      },
      size: {
        default: "px-4 md:px-5 py-3 md:py-4 h-10 md:h-14",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
