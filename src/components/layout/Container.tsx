import React from "react";

interface ContainreProps {
  children: React.ReactNode;
}

export function Container(props: ContainreProps) {
  return (
    <div className="container mx-auto flex flex-col justify-center py-7">
      {props.children}
    </div>
  );
}
