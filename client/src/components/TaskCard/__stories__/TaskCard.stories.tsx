import type { Meta } from "@storybook/react-vite";
import TaskCard from "../TaskCard";
import { mockTasksData } from "../../../data/mockData";

export default {
  title: "Components/TaskCard",
  component: TaskCard,
} as Meta<typeof TaskCard>;

export const Primary = {
  args: {
    task: mockTasksData[0],
  },
};
