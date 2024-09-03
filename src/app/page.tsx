"use client";

import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/navbar/Navbar";
import { AddTask } from "@/components/task/add-task/AddTask";
import { taskItemType } from "@/components/task/task-item/TaskItem";
import { TaskList } from "@/components/task/task-list/TaskList";
import { ValidatedTaskDialog } from "@/components/task/validated-dialog/ValidatedTaskDialog";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function Home() {
  const [taskList, setTaskList] = useLocalStorage<taskItemType[]>("tasks", []);

  function removeTask(taskId: number) {
    setTaskList((prev) => {
      if (!prev) return [];
      return taskList.filter((task) => task.id != taskId);
    });
  }

  function getLastTaskID(): number {
    return taskList.reduce((max, obj) => (obj.id > max ? obj.id : max), 0);
  }

  function addTask(task: Omit<taskItemType, "id">) {
    setTaskList((prev) => {
      if (!prev) return [];
      return [...taskList, { ...task, id: getLastTaskID() + 1 }];
    });
  }

  function validateTask(taskId: number) {
    setTaskList((prev) => {
      if (!prev) return [];
      return taskList.map((task) => {
        if (task.id == taskId) task.done = true;
        return task;
      });
    });
  }

  function taskFilter() {
    return taskList.filter((task) => !task.done);
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <Container>
        <div className="mx-auto items-center">
          <p> Ajoutez vos tâches, et une fois réalisées, retirez-les !</p>
          <div className="flex">
            <AddTask addTask={addTask} />
            <ValidatedTaskDialog taskList={taskList} />
          </div>
        </div>

        <div className="flex">
          <TaskList
            taskList={taskFilter()}
            removeTask={removeTask}
            validateTask={validateTask}
          />
        </div>
      </Container>
    </main>
  );
}
