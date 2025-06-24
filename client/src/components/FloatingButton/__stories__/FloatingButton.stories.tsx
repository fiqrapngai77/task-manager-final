import type { Meta } from "@storybook/react-vite";
import FloatingButton, { type FloatingButtonProps } from "../FloatingButton";

export default {
  title: "Components/Floating Button",
  component: FloatingButton,
  args: {
    text: "Add Task",
  },
} as Meta<typeof FloatingButton>;

const Template = (args: FloatingButtonProps) => <FloatingButton {...args} />;

export const Primary = Template.bind({});
