import React from "react";

import "./Container.css"

interface ContainreProps {
  children: React.ReactNode;
}

export function Container(props: ContainreProps) {
  return (
    <div className="container-custom">
      {props.children}
    </div>
  );
}
