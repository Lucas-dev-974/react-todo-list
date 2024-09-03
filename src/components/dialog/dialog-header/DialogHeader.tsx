import { Button } from "../../button/Button";

import "./DialogHeader.css";

interface DialogHeaderProps {
  title: string;
  onClose: () => void;
}

export function DialogHeader(props: DialogHeaderProps) {
  return (
    <div className="dialog-card-header">
      <h2 className="dialog-card-header-title">{props.title}</h2>
      <Button onClick={props.onClose} type="remove" text="&times;" />
    </div>
  );
}
