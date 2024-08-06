import { taskItemType } from "@/app/page";
import { Button } from "../button/DefaultButton";
import { TrashIcon } from "@/icons/TrashIcon";

interface TaskItemProps {
  task: taskItemType;
  key: number;
  index: number;
  removeTask: (index: number) => void;
}

export function TaskItem(props: TaskItemProps) {
  return (
    <li className="w-full px-4 py-2 my-1 bg-blue-400 rounded-md flex justify-between">
      <p>{props.task.task}</p>
      <Button
        icon={<TrashIcon />}
        onClick={() => props.removeTask(props.index)}
        type="remove"
      />
    </li>
  );
}
