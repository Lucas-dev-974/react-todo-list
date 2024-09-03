import { Button } from "@/components/button/Button";
import { Dialog } from "@/components/dialog/Dialog";
import { ValidatedListIcon } from "@/components/icons/ValidatedListIcon";
import { useState } from "react";
import { taskItemType } from "../task-item/TaskItem";
import { TaskList } from "../task-list/TaskList";

import "./ValidatedTaskDialog.css";

interface ValidatedTaskDialog {
  taskList: taskItemType[];
  removeTask: (taskId: number) => void;
  toggleTaskValidation: (taskId: number) => void;
}
export function ValidatedTaskDialog(props: ValidatedTaskDialog) {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  function filteredTaskDone() {
    return props.taskList.filter((task) => task.done);
  }

  return (
    <div className="validate-task-dialog">
      <Button onClick={openDialog} icon={<ValidatedListIcon />} type="append" />
      <Dialog
        title="Tâches effectués"
        isOpen={isDialogOpen}
        onClose={closeDialog}
        confirm={closeDialog}
      >
        <TaskList
          removeTask={props.removeTask}
          taskList={filteredTaskDone()}
          validateTask={props.toggleTaskValidation}
        />
      </Dialog>
    </div>
  );
}
