import { cn } from "@take-home/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  active: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const AsButton: React.FC<Props> = ({ children, active, className, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "rounded-lg border border-gray-300 px-4 py-2",
        active ? "bg-indigo-500 font-medium text-white" : "bg-white text-gray-500",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
