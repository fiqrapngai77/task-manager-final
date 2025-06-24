import type { BaseProps } from "../../types/BaseProps";
import { twMerge } from "tailwind-merge";
import { PiDotOutline } from "react-icons/pi";

interface TagProps extends BaseProps {
  text: string;
  type?: "default" | "in-progress" | "completed" | "minor" | "major";
}

const Tag = ({
  className,
  type = "default",
  text,
  testId = "tag-test-id",
}: TagProps) => {
  return (
    <div className={twMerge("tag", type, className)} data-testid={testId}>
      <PiDotOutline />
      {text}
    </div>
  );
};

export default Tag;
