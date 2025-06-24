/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Dropdown from "../Dropdown/Dropdown";
import { twMerge } from "tailwind-merge";
import { TaskContext } from "../../App";
import type { Task } from "../../types/Task";
import { Severity, Status } from "../../constants/Task.enum";
import { getTaskApi } from "../../api/getTask";
import { emptyTask } from "../../data/emptyTask";
import type { BaseProps } from "../../types/BaseProps";

interface ModalProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  testId = "modal-test-id",
}) => {
  if (!isOpen) return null;
  const taskContext = useContext(TaskContext);
  if (!taskContext) return null;

  const [formData, setFormData] = useState<Task>(emptyTask);

  useEffect(() => {
    if (taskContext.currentTaskId)
      getTaskApi(taskContext.currentTaskId)
        .then((data) => setFormData(data))
        .catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const severityOptions = [
    { text: "Major", value: Severity.major },
    { text: "Minor", value: Severity.minor },
  ];

  const statusOptions = [
    { text: "In-progress", value: Status.inProgress },
    { text: "Completed", value: Status.completed },
  ];

  const updateTitle = (title: string) => {
    setFormData((p) => ({ ...p, title }));
  };

  const updateDescription = (description: string) => {
    setFormData((p) => ({ ...p, description }));
  };

  const updateSeverity = (severity: string) => {
    if (severity === Severity.minor || severity === Severity.major)
      setFormData((p) => ({ ...p, severity }));
  };

  const updateStatus = (status: string) => {
    if (status === Status.inProgress || status === Status.completed)
      setFormData((p) => ({ ...p, status }));
  };

  return (
    <div
      className="modal"
      onClick={onClose} // Close when clicking on backdrop
      data-testid={testId}
    >
      <div
        className="card"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div
          className={twMerge(
            "header",
            title ? "justify-between" : "justify-end"
          )}
        >
          {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
          <Dropdown
            handler={updateStatus}
            options={statusOptions}
            value={formData.status}
          />
        </div>
        <div className="flex flex-col">
          <Input handler={updateTitle} label="Title" value={formData.title} />
          <Input
            handler={updateDescription}
            label="Description"
            type="textarea"
            value={formData.description}
          />
          <Dropdown
            handler={updateSeverity}
            label="Severity"
            options={severityOptions}
            value={formData.severity}
          />
        </div>
        <div className="footer">
          <Button handler={onClose} text={"Close"} type="default" />
          <Button
            handler={() => {
              if (formData.id) taskContext.updateTask(formData);
              else taskContext.addTask(formData);
              onClose();
            }}
            text={"Save"}
            type="positive"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
