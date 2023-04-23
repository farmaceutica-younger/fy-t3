import { ReactNode } from "react";
import { Field } from "react-final-form";

interface SwitchFieldProps {
  name: string;
  label: ReactNode;
}

export const SwitchField = ({ name, label }: SwitchFieldProps) => {
  return (
    <div className="flex gap-4 align-middle">
      <Field<boolean>
        name={name}
        render={({ input }) => (
          <input
            type="checkbox"
            className="toggle-primary toggle"
            checked={input.value}
            onChange={(e) => input.onChange(e.target.checked)}
          />
        )}
      ></Field>
      <span className="text-sm  "> {label} </span>
    </div>
  );
};
