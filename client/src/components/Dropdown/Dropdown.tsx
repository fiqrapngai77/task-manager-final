import { twMerge } from "tailwind-merge";
import type { BaseProps } from "../../types/BaseProps";
import type { TDropdown } from "../../types/Dropdown.d";

interface DropdownProps extends BaseProps {
  label?: string;
  options: TDropdown[];
  handler: (value: string) => void;
  value: string;
}

const Dropdown = ({
  className,
  label,
  options,
  handler,
  value,
  testId = "dropdown-test-id",
}: DropdownProps) => {
  return (
    <div className={twMerge("dropdown", className)} data-testid={testId}>
      {label && <label>{label}:</label>}
      <select
        style={{ width: "200px" }}
        className="select"
        onChange={(e) => {
          handler(e.target.value);
        }}
        value={value}
      >
        {options.map((opt, i) => (
          <option value={opt.value} key={i}>
            {opt.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
