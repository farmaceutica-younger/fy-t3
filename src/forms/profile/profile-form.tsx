import clsx from "clsx";
import deepEqual from "fast-deep-equal";
import { TextField } from "../fields/text-field";
import { ZodForm } from "../zod-form";
import { ProfileSchema, ProfileType } from "./profile-schema";

export const ProfileForm = ({ submit, initialValues }: ProfileFormProps) => {
  const onSubmit = async (value: ProfileType) => {
    await submit(value);
  };

  return (
    <ZodForm
      onSubmit={onSubmit}
      schema={ProfileSchema}
      initialValues={initialValues}
      initialValuesEqual={deepEqual}
    >
      {({ handleSubmit, invalid, submitting }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Il tuo nome"
            name="firstName"
            required
            type="text"
          />
          <TextField
            label="Il tuo cognome"
            name="lastName"
            required
            type="text"
          />
          <TextField
            label="L'url del tuo profilo Linkedin"
            name="linkedinUrl"
            type="text"
          />
          <TextField
            label="Il tuo username su Telegram"
            name="telegramUsername"
            type="text"
          />

          <button
            className={clsx("btn-primary btn mt-4 w-full", {
              loading: submitting,
            })}
            disabled={invalid}
            type="submit"
          >
            Salva
          </button>
        </form>
      )}
    </ZodForm>
  );
};

interface ProfileFormProps {
  submit: (data: ProfileType) => Promise<void>;
  initialValues?: any;
}
