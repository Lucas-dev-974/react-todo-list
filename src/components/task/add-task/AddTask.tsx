import { Button } from "@/components/button/Button";
import { useState } from "react";
import { taskItemType } from "../task-item/TaskItem";
import { Input } from "@/components/input/Input";
import { PlusIcon } from "@/components/icons/PlusIcon.";

export interface AddTaskDialogProps {
  addTask: (task: Omit<taskItemType, "id">) => void;
}

export function AddTask(props: AddTaskDialogProps) {
  const [task, setTask] = useState<string>("");

  function addTask() {
    if (task.trim()) {
      props.addTask({ task: task });
    }

    // Reset input to empty
    setTask("");
  }

  return (
    <div className="gap-1 flex mt-5">
      <Input
        onChange={(value) => setTask(value)}
        value={task}
        placeholder="Entrez une tâche"
        onEnter={addTask}
      />

      <Button onClick={addTask} icon={<PlusIcon />} text="" type="append" />
    </div>
  );
}
