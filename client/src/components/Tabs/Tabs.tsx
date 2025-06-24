import React, { useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import TaskCard from "../TaskCard/TaskCard";
import { TaskContext } from "../../App";
import { Status } from "../../constants/Task.enum";

interface ChoiceTabProps {
  isActive: boolean;
  text: string;
  handler: () => void;
}

const ChoiceTab = ({ isActive, text, handler }: ChoiceTabProps) => {
  return (
    <div
      onClick={handler}
      className={twMerge(
        "choice",
        !isActive ? "bg-green-800 text-white border-b font-light" : "font-bold"
      )}
      data-testid={`${text.toLowerCase()}-choice-test-id`}
    >
      {text}
    </div>
  );
};

const Tabs = () => {
  const taskContext = useContext(TaskContext);
  if (!taskContext) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentTab, setCurrentTab] = useState<Status>(Status.inProgress);

  const updateCurrentTab = (tabName: Status) => {
    setCurrentTab(tabName);
  };

  return (
    <div className="tabs-wrapper" data-testid="tabs-test-id">
      <div className="flex flex-row">
        <ChoiceTab
          isActive={currentTab === Status.inProgress}
          handler={() => updateCurrentTab(Status.inProgress)}
          text="In-Progress"
        />
        <ChoiceTab
          isActive={currentTab === Status.completed}
          handler={() => updateCurrentTab(Status.completed)}
          text="Completed"
        />
      </div>
      {currentTab == Status.inProgress && (
        <div className={twMerge("tabs")} data-testid="in-progress-tab-test-id">
          {taskContext.tasks
            .filter((t) => t.status === Status.inProgress)
            .map((task, i) => (
              <TaskCard task={task} key={i} />
            ))}
        </div>
      )}

      {currentTab == Status.completed && (
        <div className={twMerge("tabs")} data-testid="complete-tab-test-id">
          {taskContext.tasks
            .filter((t) => t.status === Status.completed)
            .map((task, i) => (
              <TaskCard task={task} key={i} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;
