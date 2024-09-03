import "./DialogActions.css";
import { Button } from "@/components/button/Button";

import "./DialogActions.css";

interface DialogActionsProps {
  close: () => void;
  confirm: () => void;
}

export function DialogActions(props: DialogActionsProps) {
  return (
    <div className="dialog-actions">
      <Button onClick={props.close} type="remove" text="Fermer" />
      <Button onClick={props.confirm} type="append" text="Confirmer" />
    </div>
  );
}
