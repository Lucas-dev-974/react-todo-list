import { ReactNode } from "react";
import "./DefaultButton.css";

interface ButtonProps {
  onClick: () => void;
  text?: string;
  type: "append" | "remove";
  icon?: ReactNode;
}

export default function Button(props: ButtonProps) {
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
