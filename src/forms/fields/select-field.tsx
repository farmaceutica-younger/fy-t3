import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Field } from "react-final-form";

interface SelectFieldProps<T = string> {
  name: string;
  label: string;
  options: PickerOption<T>[];
  makeChoiceText?: string;
}

export function SelectField<T = any>({
  name,
  options,
  label,
  makeChoiceText = "Scegli un'opzione",
}: SelectFieldProps<T>) {
  return (
    <Field
      type="text"
      name={name}
      render={({ input }) => (
        <div>
          <label htmlFor={name}> {label} </label>
          <SelectPicker<T>
            makeChoiceText={makeChoiceText}
            options={options}
            value={input.value}
            setValue={input.onChange}
          />
        </div>
      )}
    />
  );
}

interface PickerOption<T = any> {
  value: T;
  label: string;
}

interface SelectPickerProps<T = any> {
  setValue: (v: T) => void;
  value: T;
  options: PickerOption<T>[];
  makeChoiceText?: string;
}

const SelectPicker = <T,>({
  value,
  setValue,
  options,
  makeChoiceText = "Scegli un'opzione",
}: SelectPickerProps<T>) => {
  const currentValue = options.find((o) => o.value == value);
  return (
    <Listbox
      value={currentValue}
      onChange={(v) => {
        setValue(v?.value || options[0].value);
      }}
    >
      {({ open }) => (
        <div className="relative mt-1">
          <Listbox.Button className="s relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
            <span className="block truncate">
              {currentValue?.label || makeChoiceText}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((v) => (
                <Listbox.Option
                  key={v.label}
                  className={({ active }) =>
                    classNames(
                      active ? "bg-indigo-600 text-white" : "text-gray-900",
                      "relative cursor-default select-none py-2 pl-3 pr-9",
                    )
                  }
                  value={v}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "block truncate",
                        )}
                      >
                        {v.label}
                      </span>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? "text-white" : "text-indigo-600",
                            "absolute inset-y-0 right-0 flex items-center pr-4",
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
