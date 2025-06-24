import React, { useContext } from "react";
import type { BaseProps } from "../../types/BaseProps";
import { twMerge } from "tailwind-merge";
import { FiTrash2 } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import Tag from "../Tag/Tag";
import type { Task } from "../../types/Task";
import { TaskContext } from "../../App";
import { format } from "date-fns";

export interface TaskCardProps extends BaseProps {
  task: Task;
}

const TaskCard = ({
  className,
  task,
  testId = "taskcard-test-id",
}: TaskCardProps) => {
  const taskContext = useContext(TaskContext);
  if (!taskContext) return null;

  const deleteTask = (id: number) => {
    try {
      taskContext.deleteTask(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={twMerge("taskcard", className)}
      onClick={() => {
        if (task.id) taskContext.setCurrentTask(task.id);
      }}
      data-testid={testId}
    >
      <div className="header justify-between">
        <h2 className="title">{task.title}</h2>
        <span
          onClick={(e) => {
            e.stopPropagation();
            if (task.id) deleteTask(task.id);
          }}
        >
          <FiTrash2 className="cursor-pointer" size={16} />
        </span>
      </div>
      <div className="description">
        <p className="text-xs">{task.description}</p>
      </div>
      <div className="timestamp">
        <IoTimeOutline />
        <p>{format(task.updated_at, "dd/MM/yyyy hh:mm:ss")}</p>
      </div>
      <div className="tags">
        <Tag text={task.severity} type={task.severity} />
        <Tag text={task.status} type={task.status} />
      </div>
    </div>
  );
};

export default TaskCard;
