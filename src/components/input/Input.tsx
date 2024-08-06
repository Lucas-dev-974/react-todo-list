import { useState } from "react";

interface InputProps {
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
}

export function Input(props: InputProps) {
  return (
    <input
      className="w-full p-2 border border-gray-300 rounded mb-4 text-slate-950"
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder ?? ""}
      value={props.value ?? ""}
      type="text"
    />
  );
}
