import { cn } from "@take-home/utils";
import React from "react";

type Props = {
  active: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function someFunction() {
  return "hello";
}

export const AsButton: React.FC<Props> = ({ active, className, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "rounded-lg border border-gray-300 px-4 py-2",
        active ? "bg-indigo-500 font-medium text-white" : "bg-white text-gray-500",
        className,
      )}
      {...props}
    />
  );
};
