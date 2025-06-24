import type { Meta } from "@storybook/react-vite";
import Modal from "../Modal";
import { fn } from "storybook/internal/test";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta<typeof Modal>;

export const Default = {
  args: {
    isOpen: true,
    onClose: fn(),
    title: "PIKA",
  },
};
