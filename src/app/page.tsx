"use client";

import { TaskList } from "@/components/task/TaskList";
import { useState } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Container } from "@/components/layout/Container";
import { AddTask } from "@/components/task/AddTask";

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
      <Navbar />

      <Container>
        <div className="mx-auto items-center">
          <p> Ajoutez vos tâches, et une fois réalisées, retirez-les !</p>
          <AddTask addTask={addTask} />
        </div>

        <div className="flex">
          <TaskList taskList={taskList} removeTask={removeTask} />
        </div>
      </Container>
    </main>
  );
}
