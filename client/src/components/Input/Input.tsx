import React from "react";
import type { BaseProps } from "../../types/BaseProps";
import { twMerge } from "tailwind-merge";

export interface InputProps extends BaseProps {
  label: string;
  type?: "default" | "textarea";
  handler: (value: string) => void;
  value: string;
}

const Input = ({
  className,
  type = "default",
  label,
  handler,
  value,
  testId = "input-test-id",
}: InputProps) => {
  if (type === "default")
    return (
      <div
        className={twMerge("flex flex-col gap-1", className)}
        data-testid={testId}
      >
        <label>{label}:</label>
        <input
          className="form-input"
          onChange={(e) => {
            handler(e.target.value);
          }}
          value={value}
        />
      </div>
    );
  else if (type === "textarea") {
    return (
      <div
        className={twMerge("flex flex-col gap-1", className)}
        data-testid={testId}
      >
        <label>{label}:</label>
        <textarea
          rows={7}
          className="form-input"
          onChange={(e) => {
            handler(e.target.value);
          }}
          value={value}
        />
      </div>
    );
  }
};

export default Input;
