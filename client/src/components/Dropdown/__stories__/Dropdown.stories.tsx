import type { Meta } from "@storybook/react-vite";
import Dropdown from "../Dropdown";
import { Severity, Status } from "../../../constants/Task.enum";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta<typeof Dropdown>;

export const Default = {
  args: {
    label: "Severity",
    options: [
      { text: "Major", value: Severity.major },
      { text: "Minor", value: Severity.minor },
    ],
  },
};

export const NoLabel = {
  args: {
    options: [
      { text: "In-progress", value: Status.inProgress },
      { text: "Completed", value: Status.completed },
    ],
  },
};
