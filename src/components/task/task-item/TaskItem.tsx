import { Button } from "@/components/button/Button";
import "./TaskItem.css"
import { CheckIcon } from "@/components/icons/CheckIcon";
import { TrashIcon } from "@/components/icons/TrashIcon";
// import { CheckIcon } from "@/icons/CheckIcon";

export type taskItemType = {
  id: number;
  task: string;
  archived?: boolean
  done?: boolean
};

export interface TaskItemProps {
  task: taskItemType;
  key: number;
  removeTask: (taskId: number) => void;
  validateTask: (taskId: number) => void;
}

export function TaskItem(props: TaskItemProps) {
  return (
    <li className="task-item" >
      <p className="task-item-text">{props.task.task}</p>
      <div className="flex">

        <Button
          icon={<TrashIcon />}
          onClick={() => props.removeTask(props.task.id)}
          type="remove"
        />
        <Button
          icon={<CheckIcon />}
          onClick={() => props.validateTask(props.task.id)}
          type="append"
        />
      </div>
    </li>
  );
}
