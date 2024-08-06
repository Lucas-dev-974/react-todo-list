import { PlusIcon } from "@/icons/PlusIcon.";
import { Button } from "../button/DefaultButton";
import { useState } from "react";
import { taskItemType } from "@/app/page";
import { Input } from "../input/Input";

interface AddTaskDialogProps {
  addTask: (task: taskItemType) => void;
}

export function AddTask(props: AddTaskDialogProps) {
  const [task, setTask] = useState<string>("");

  function addTask() {
    if (task.trim()) {
      props.addTask({ task: task });
    }
  }

  return (
    <div className="flex gap-2">
      <Input onChange={(value) => setTask(value)} value={task} />
      <Button onClick={addTask} icon={<PlusIcon />} text="" type="append" />
    </div>
  );
}
