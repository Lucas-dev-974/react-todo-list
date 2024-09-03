import { Button } from "@/components/button/Button";

interface ValidatedTaskDialogActions {
  confirm: () => void;
  close: () => void;
}

export function ValidatedTaskDialogActions(props: ValidatedTaskDialogActions) {
  return (
    <>
      <Button onClick={props.close} type="remove" text="Fermer" />
      <Button onClick={props.confirm} type="append" text="Confirmer" />
    </>
  );
}
