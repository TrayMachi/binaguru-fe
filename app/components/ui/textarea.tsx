import * as React from "react";

import { cn } from "~/lib/utils";
import { Label } from "./label";
import { TriangleAlert } from "lucide-react";

export interface TextAreaProps extends React.ComponentProps<"textarea"> {
  label?: string;
  error?: string;
  required?: boolean;
  layout?: string;
}

function Textarea({
  className,
  layout,
  label,
  required,
  error,
  ...props
}: TextAreaProps) {
  return (
    <div className={cn(layout)}>
      <Label>
        {label} {required && <span className="text-red-600">*</span>}
      </Label>
      <textarea
        data-slot="textarea"
        className={cn(
          "disabled:opacity-40 my-2 px-4 py-3 flex h-12 w-full rounded-[8px] border-[1px] font-space bg-white dark:bg-[#2A2A2A] text-b8 file:border-0 file:bg-transparent file:text-b8 file:font-medium placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed  hover:placeholder:text-black/100 transition-all duration-500",
          className,
          error
            ? "border-error"
            : "enabled:hover:border-black focus:border-black"
        )}
        {...props}
      />
      {error && (
        <div className="flex gap-2 items-center text-error">
          <TriangleAlert className="w-4" />
          <span className="text-sm font-medium">{error}</span>
        </div>
      )}
    </div>
  );
}

export { Textarea };
