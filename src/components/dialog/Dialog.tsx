import React, { useRef, useEffect, ReactNode } from "react";
import { DialogHeader } from "./dialog-header/DialogHeader";
import { DialogActions } from "./dialog-actions/DialogActions";

import "./Dialog.css";

interface DialogProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  confirm: () => void;
}

export function Dialog(props: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  function handleClickOutside(event: MouseEvent) {
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node))
      props.onClose();
  }

  useEffect(() => {
    if (props.isOpen)
      document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  if (!props.isOpen) return null;

  return (
    <div className="dialog-layout">
      <div ref={dialogRef} className="dialog-card">
        <DialogHeader onClose={props.onClose} title={props.title} />

        <div className="dialog-card-content">{props.children}</div>

        <DialogActions close={props.onClose} confirm={props.confirm} />
      </div>
    </div>
  );
}
