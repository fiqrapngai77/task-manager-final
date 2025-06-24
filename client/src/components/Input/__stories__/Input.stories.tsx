import type { Meta } from "@storybook/react-vite";
import Input from "../Input";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    label: "Name",
    type: "default",
  },
} as Meta<typeof Input>;

export const Default = {
  args: {
    label: "Name",
    type: "default",
  },
};

export const TextArea = {
  args: {
    label: "Name",
    type: "textarea",
  },
};
