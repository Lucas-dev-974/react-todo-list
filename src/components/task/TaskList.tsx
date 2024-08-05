import { taskItemType } from "@/app/page";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  taskList: taskItemType[];
  removeTask: (index: number) => void;
}

export function TaskList(props: TaskListProps) {
  return (
    <ul className="container ">
      {props.taskList.map((task, index) => (
        <TaskItem
          task={task}
          key={index}
          index={index}
          removeTask={props.removeTask}
        />
      ))}
    </ul>
  );
}
