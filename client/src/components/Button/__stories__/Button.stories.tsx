import type { Meta } from "@storybook/react-vite";
import Button from "../Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

export const Default = {
  args: {
    text: "Click Me",
    type: "default",
  },
};

export const Negative = {
  args: {
    text: "Click Me",
    type: "negative",
  },
};

export const Positive = {
  args: {
    text: "Click Me",
    type: "positive",
  },
};
