"use client";

import { AddTaskDialog } from "@/components/AddTaskDialog";
import Button from "@/components/button/DefaultButton";
import { TaskList } from "@/components/task/TaskList";
import { PlusIcon } from "@/icons/PlusIcon.";
import { TrashIcon } from "@/icons/TrashIcon";
import { useState } from "react";

export type taskItemType = {
  task: string;
};

export default function Home() {
  const [taskList, setTaskList] = useState<taskItemType[]>([]);

  function removeTask(index: number) {
    setTaskList(taskList.filter((_, i) => i !== index));
  }

  function addTask(task: taskItemType) {
    setTaskList([...taskList, task]);
  }

  return (
    <main className="min-h-screen">
      <nav className="w-full flex justify-center h-[60px] items-center bg-[#220bab]">
        <h1 className="text-white">Tâches à réaliser</h1>
      </nav>

      <div className="container mx-auto flex flex-col justify-center py-7">
        <div className="mx-auto flex gap-2 items-center">
          <p> Ajoutez vos tâches, et une fois réalisées, retirez-les !</p>
          <AddTaskDialog addTask={addTask} />
        </div>

        <div className="flex">
          <TaskList taskList={taskList} removeTask={removeTask} />
        </div>
      </div>
    </main>
  );
}
