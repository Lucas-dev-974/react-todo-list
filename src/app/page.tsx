import Button from "@/components/DefaultButton";
import { PlusIcon } from "@/icons/PlusIcon.";
import { TrashIcon } from "@/icons/TrashIcon";
import { useState } from "react";

export const [taskList, setTaskList] = useState<taskItemType[]>([])

type taskItemType = {
  task: string
}



function addTaskButton(){}
function removeTaskButton(){}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo List </h1>

      <Button onClick={addTaskButton} icon={<PlusIcon />} text="" type="append" />
      <Button onClick={removeTaskButton} icon={<TrashIcon />} text="" type="append" />
    </main>
  );
}
