import type { Meta } from "@storybook/react-vite";
import Tag from "../Tag";

export default {
  title: "Components/Tag",
  component: Tag,
} as Meta<typeof Tag>;

export const Default = {
  args: {
    type: "default",
    text: "Default",
  },
};

export const InProgress = {
  args: {
    type: "in-progress",
    text: "In Progress",
  },
};

export const Completed = {
  args: {
    type: "completed",
    text: "Completed",
  },
};

export const Minor = {
  args: {
    type: "minor",
    text: "Minor",
  },
};

export const Major = {
  args: {
    type: "major",
    text: "Major",
  },
};
