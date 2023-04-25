import { DndContext } from "@dnd-kit/core";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, Bars4Icon } from "@heroicons/react/24/outline";
import cuid from "cuid";
import deepEqual from "fast-deep-equal";
import arrayMutators from "final-form-arrays";
import { Fragment, SVGProps } from "react";
import { Field, Form } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import {
  CheckedMultipleChoiseIcon,
  CheckedSingleChoiseIcon,
  MultipleChoiceIcon,
  SingleChoiseIcon,
} from "./icons";
import { Question, Questionairre, QuestionairreSchema } from "./schema";
import { ZodForm } from "~/forms/zod-form";

interface QuestionairreBuilderProps {
  questionairre: Questionairre;
  onSave: (questionairre: Questionairre) => void;
}

export const QuestionairreBuilder = ({
  questionairre,
  onSave,
}: QuestionairreBuilderProps) => {
  return (
    <DndContext>
      <ZodForm
        schema={QuestionairreSchema}
        onSubmit={onSave}
        mutators={{
          ...arrayMutators,
        }}
        initialValues={questionairre}
        initialValuesEqual={deepEqual}
      >
        {({ invalid, handleSubmit }) => {
          return (
            <form className="m-auto max-w-lg" onSubmit={handleSubmit}>
              <FieldArray name="questions">
                {({ fields }) => (
                  <div>
                    {fields.map((name, index) => (
                      <div key={name}>
                        <QuestionView
                          formKey={name}
                          onRemove={() => fields.remove(index)}
                        ></QuestionView>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="bmt-sm btn-outline btn-primary btn mt-4 w-full"
                      onClick={() => fields.push({ cuid: cuid() })}
                    >
                      Aggiungi Domanda
                    </button>
                  </div>
                )}
              </FieldArray>
              <button
                type="submit"
                className="btn-primary btn mt-10 w-full"
                disabled={invalid}
              >
                Salva Form
              </button>
            </form>
          );
        }}
      </ZodForm>
    </DndContext>
  );
};

export const QuestionView = ({
  formKey,
  onRemove,
}: {
  formKey: string;
  onRemove: () => void;
}) => {
  return (
    <div className="mt-4 rounded-2xl bg-white p-4 shadow-lg">
      <Field
        type="text"
        name={`${formKey}.description`}
        render={({ input, meta }) => {
          return (
            <div>
              <div className="mb-2 flex justify-between">
                <label
                  htmlFor={`${formKey}.description`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Domanda
                </label>
                <button onClick={() => onRemove()}>
                  <XMarkIcon className="ml-2 h-6 w-6 text-gray-400" />
                </button>
              </div>
              <div className="mt-1 flex rounded-md shadow-sm">
                <textarea
                  rows={3}
                  className="block w-full min-w-0 flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  {...input}
                />
              </div>
              <div className="mt-1 flex h-5 justify-between text-xs">
                <span className="text-sm text-red-400">{meta.error}</span>
                <span className={"text-stone-400"}>
                  {input.value.length} / 200
                </span>
              </div>
            </div>
          );
        }}
      />
      <Field
        type="checkbox"
        name={`${formKey}.required`}
        render={({ input }) => {
          return (
            <>
              <div className="py-2">
                <label className="justify-start">
                  <input className="mr-4" {...input} />
                  <span className="label-text">Required</span>
                </label>
              </div>
            </>
          );
        }}
      />
      <Field<Question["type"]>
        name={`${formKey}.type`}
        defaultValue="short"
        render={({ input: { value, onChange } }) => {
          return (
            <SelectPicker<Question["type"]>
              label={`Tipo di Domanda`}
              options={types}
              value={value}
              setValue={onChange}
            />
          );
        }}
      />
      <Condition when={`${formKey}.type`} is="short">
        <div className="mt-4 max-w-[200px] border-b-2 border-gray-300 py-2 text-gray-400">
          <span>Testo risposta breve</span>
        </div>
      </Condition>
      <Condition when={`${formKey}.type`} is="long">
        <div className="mt-4 border-b-2 border-gray-300 py-2 text-gray-400">
          <span>Testo risposta lunga</span>
        </div>
      </Condition>
      <Condition when={`${formKey}.type`} is="multiple_choice">
        <>
          <MultipleOptionsForm
            Icon={MultipleChoiceIcon}
            name={`${formKey}.options`}
          />
        </>
      </Condition>
      <Condition when={`${formKey}.type`} is="single_choice">
        <MultipleOptionsForm
          Icon={SingleChoiseIcon}
          name={`${formKey}.options`}
        />
      </Condition>
    </div>
  );
};

const types: PickerOption<Question["type"]>[] = [
  {
    label: (
      <div className="flex items-center space-x-2">
        <Bars4Icon className="h-6 w-6" />
        <span>Risposta Breve</span>
      </div>
    ),
    value: "short",
  },
  {
    label: (
      <div className="flex items-center space-x-2">
        <Bars3Icon className="h-6 w-6" />
        <span>Risposta Lunga</span>
      </div>
    ),
    value: "long",
  },
  {
    label: (
      <div className="flex items-center space-x-2">
        <CheckedMultipleChoiseIcon className="mr-2 h-6 w-6" />
        <span>Risposta Multipla</span>
      </div>
    ),
    value: "multiple_choice",
  },
  {
    label: (
      <div className="flex items-center space-x-2">
        <CheckedSingleChoiseIcon className="mr-2 h-6 w-6" />
        <span>Risposta Singola</span>
      </div>
    ),
    value: "single_choice",
  },
];

interface PickerOption<T = any> {
  value: T;
  label: JSX.Element;
}

interface SelectPickerProps<T = any> {
  setValue: (v: T) => void;
  value: T;
  options: PickerOption<T>[];
  label: string;
}

const SelectPicker = <T,>({
  value,
  setValue,
  options,
  label,
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
          <Listbox.Label className="block text-sm font-medium text-gray-700">
            {label}
          </Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
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
                    key={String(v.value)}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={v}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {v.label}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Condition = ({
  when,
  is,
  children,
}: {
  when: string;
  is: any;
  children: JSX.Element;
}) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

const MultipleOptionsForm = ({
  name,
  Icon,
}: {
  name: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}) => {
  return (
    <FieldArray name={name}>
      {({ fields }) => (
        <div>
          {fields.map((name, index) => (
            <div key={name}>
              <Field
                type="text"
                name={`${name}`}
                render={({ input, meta }) => {
                  return (
                    <>
                      <div className="mt-1 flex items-center text-stone-500">
                        <Icon className="" />
                        <input
                          className="block w-full min-w-0 flex-1 rounded-md border-none  focus:border-none focus:ring-0"
                          {...input}
                        />
                        <span
                          className={`text-sm  ${
                            meta.error ? "text-red-400" : ""
                          }`}
                        >
                          {input.value.length} / 40
                        </span>
                        <button onClick={() => fields.remove(index)}>
                          <XMarkIcon className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </>
                  );
                }}
              />
            </div>
          ))}
          <div className="mt-2 text-stone-500">
            <button
              type="button"
              className="block w-full min-w-0 flex-1 rounded-md border-none  focus:border-none focus:ring-0"
              onClick={() => fields.push("new option")}
            >
              <div className="flex">
                <Icon className="mr-2" />
                <span className="block ">Aggiungi Opzione</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </FieldArray>
  );
};
