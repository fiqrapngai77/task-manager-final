import type { BaseProps } from "../../types/BaseProps";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends BaseProps {
  text: string;
  type?: "default" | "negative" | "positive";
  handler: () => void;
}

const Button = ({
  className,
  handler,
  type = "default",
  text,
  testId = "button-test-id",
}: ButtonProps) => {
  return (
    <button
      onClick={handler}
      className={twMerge("button", type, className)}
      data-testid={testId}
    >
      {text}
    </button>
  );
};

export default Button;
