import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Field } from "react-final-form";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const DatePickerField = ({
  name,
  label,
}: {
  name: string;
  label: string;
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field
        name={name}
        render={({ input }) => (
          <DatePicker
            value={new Date(input.value || new Date())}
            onChange={input.onChange}
          />
        )}
      />
    </div>
  );
};

interface DatePickerProps {
  value?: Date;
  onChange: (value: Date) => void;
}
export const DatePicker = ({
  value = new Date(),
  onChange,
}: DatePickerProps) => {
  const [years] = useState(getYears());
  const [year, setYear] = useState<number>(value.getFullYear());

  const [months] = useState(getMonths());
  const [month, setMonth] = useState<number>(value.getMonth());

  const [days, setDays] = useState(getDays(month, year));
  const [day, setDay] = useState(value.getDate());

  const [hours] = useState(getHours());
  const [hour, setHour] = useState(value.getHours());

  useEffect(() => {
    setDays(getDays(month, year));
  }, [year, month]);

  useEffect(() => {
    const value = new Date(year, month, day, hour, 0);
    onChange(value);
  }, [year, month, day, hour, onChange]);

  return (
    <div className="flex gap-4">
      <SelectPicker
        name="giorno"
        options={days}
        value={day}
        setValue={setDay}
      />

      <SelectPicker
        name="mese"
        options={months}
        value={month}
        setValue={setMonth}
      />

      <SelectPicker
        name="anno"
        options={years}
        value={year}
        setValue={setYear}
      />
      <SelectPicker
        name="ora"
        options={hours}
        value={hour}
        setValue={setHour}
      />
    </div>
  );
};

interface PickerOption<T = any> {
  value: T;
  label: string;
}

interface SelectPickerProps<T = any> {
  setValue: (v: T) => void;
  value: T;
  options: PickerOption<T>[];
  name: string;
}

const SelectPicker = <T,>({
  value,
  setValue,
  options,
  name,
}: SelectPickerProps<T>) => {
  const currentValue = options.find((o) => o.value == value);
  return (
    <Listbox
      value={currentValue}
      onChange={(v) => {
        setValue(v?.value || options[0]!.value);
      }}
    >
      {({ open }) => (
        <div>
          <Listbox.Label className="block text-xs  text-gray-500">
            {name}
          </Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="s relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 sm:text-sm">
              <span className="block truncate">{currentValue?.label}</span>
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
                        active ? "bg-pink-600 text-white" : "text-gray-900",
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
                              active ? "text-white" : "text-pink-600",
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
        </div>
      )}
    </Listbox>
  );
};

function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate() || 31;
}

function getDays(month: number, year: number): PickerOption<number>[] {
  const days = daysInMonth(month + 1, year);
  return arrayCount(days, 1).map((d) => ({
    label: String(d),
    value: d,
  }));
}

function getYears(): PickerOption<number>[] {
  return arrayCount(50, 2015).map((y) => ({
    label: String(y),
    value: y,
  }));
}

function getMonths(): PickerOption<number>[] {
  return arrayCount(12, 0).map((m) => ({
    label: monthList[m]!,
    value: m,
  }));
}

function getHours(): PickerOption<number>[] {
  return arrayCount(24).map((h) => {
    return {
      label: `${String(h).padStart(2, "0")}:00`,
      value: h,
    };
  });
}

function arrayCount(n: number, offset: number = 0) {
  return Array.from(new Array(n)).map((_, idx) => idx + offset);
}

const monthList = [
  "gennaio",
  "febbraio",
  "marzo",
  "aprile",
  "maggio",
  "giugno",
  "luglio",
  "agosto",
  "settembre",
  "ottobre",
  "novembre",
  "dicembre",
];
