import { Field } from "react-final-form";

interface TextFieldProps {
  name: string;
  label: string;
  max?: number;
  numRows?: number;
  type?: "text" | "password";
  required?: boolean;
  placeholder?: string;
}

export const TextField = ({
  label,
  name,
  max,
  numRows,
  type = "text",
  required,
  placeholder,
}: TextFieldProps) => (
  <Field type={type} name={name} id={name}>
    {({ input, meta }) => {
      return (
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">{label}</span>
            {required && (
              <span className="label-text-alt">
                <span className="ml-2 text-red-500">*</span>
              </span>
            )}
          </label>
          {numRows ? (
            <textarea
              {...input}
              className="textarea-primary textarea h-24 w-full"
              placeholder={placeholder}
              rows={numRows}
            ></textarea>
          ) : (
            <input
              {...input}
              placeholder={placeholder}
              className="input-bordered input-primary input input-sm w-full"
            />
          )}
          <label className="label">
            <span className="label-text-alt text-red-400">
              {meta.touched && meta.error}
            </span>
            {max && (
              <span className={"label-text-alt"}>
                {input.value.length} / {max}
              </span>
            )}
          </label>
        </div>
      );
    }}
  </Field>
);
