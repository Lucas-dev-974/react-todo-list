import { PlusIcon } from "@/icons/PlusIcon.";
import Button from "./button/DefaultButton";
import { useState } from "react";
import { taskItemType } from "@/app/page";

interface AddTaskDialogProps {
  addTask: (task: taskItemType) => void;
}

export function AddTaskDialog(props: AddTaskDialogProps) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");

  function handleAddTaskButton() {
    setOpenDialog(true);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
    setTask(""); // Réinitialiser le champ de texte lors de la fermeture du dialogue
  }

  function handleSubmit() {
    if (task.trim()) {
      props.addTask({ task: task });
      handleCloseDialog();
    }
  }
  return (
    <>
      <Button
        onClick={handleAddTaskButton}
        icon={<PlusIcon />}
        text=""
        type="append"
      />

      {openDialog && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-30">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Ajouter une tâche</h2>
            <input
              type="text"
              placeholder="Entrez votre tâche ici..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4 text-slate-950"
            />
            <div className="flex justify-end">
              <Button
                type="remove"
                onClick={handleCloseDialog}
                text="Annuler"
              />
              <Button type="append" onClick={handleSubmit} text="Ajouter" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
