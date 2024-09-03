import { ReactNode } from "react";
import "./DialogActions.css";

interface DialogActionsProps {
  actions: ReactNode;
}

export function DialogActions(props: DialogActionsProps) {
  return <div className="flex justify-end space-x-2 px-4">{props.actions}</div>;
}
