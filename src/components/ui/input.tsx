import * as React from "react";

export function Input({ className = "", ...props }: any) {
  return (
    <input
      className={`px-3 py-2 rounded bg-white/5 border border-white/10 text-white ${className}`}
      {...props}
    />
  );
}