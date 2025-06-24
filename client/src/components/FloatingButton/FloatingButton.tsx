import type { BaseProps } from "../../types/BaseProps";
import { IoIosAdd } from "react-icons/io";
import type { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

export interface FloatingButtonProps extends BaseProps {
  Icon?: IconType;
  text?: string;
  handler: () => void;
}

const FloatingButton = ({
  Icon = IoIosAdd,
  text,
  handler,
  className,
  testId = "floating-button-test-id",
}: FloatingButtonProps) => {
  return (
    <div
      className={twMerge("floating-button", className)}
      onClick={handler}
      data-testid={testId}
    >
      <Icon color="white" size={24} />
      {text && <span className="fb-text">{text}</span>}
    </div>
  );
};

export default FloatingButton;
