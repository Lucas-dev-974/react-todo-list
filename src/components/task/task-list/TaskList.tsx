import { taskItemType, TaskItem } from "../task-item/TaskItem";



export interface TaskListProps {
  taskList: taskItemType[];
  removeTask: (taskId: number) => void;
  validateTask: (taskId: number) => void;

}

export function TaskList(props: TaskListProps) {
  return (
    <ul className="container lg:w-1/3 px-1 mx-auto">
      {props.taskList.map((task) => {
        return (
          <TaskItem
            task={task}
            key={task.id}
            removeTask={props.removeTask}
            validateTask={props.validateTask}
          />)
      })}
    </ul>
  );
}
