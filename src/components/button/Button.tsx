import { ReactNode } from "react";
import "./Button.css";

export interface ButtonProps {
  onClick: () => void;

  type: "append" | "remove";
  icon?: ReactNode;
  text?: string;
}

export function Button(props: ButtonProps) {
  const child = props.icon ?? props.text;
  const classBtn = props.icon ? "btn-icon" : "btn";

  return (
    <button
      className={"m-1 " + classBtn + " " + props.type}
      onClick={props.onClick}
    >
      {child}
    </button>
  );
}
