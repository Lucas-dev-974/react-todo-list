import {  ReactNode } from "react";

interface ButtonProps {
    onClick: () => void;
    text: string
    type: "append" | "remove"
    icon?: ReactNode
}

export default function Button(props: ButtonProps){
    const child = props.icon ?? props.text

    return <button className="m-1" onClick={props.onClick}>{child}</button>
}