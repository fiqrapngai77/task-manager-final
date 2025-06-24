import type { Meta } from "@storybook/react-vite";
import Tabs from "../Tabs";
import { mockTasksData } from "../../../data/mockData";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta<typeof Tabs>;

export const Default = {
  args: {
    tasks: mockTasksData,
  },
};
