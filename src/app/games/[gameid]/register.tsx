import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { z } from "zod";
import { SwitchField } from "~/forms/fields/switch-field";
import { TextField } from "~/forms/fields/text-field";
import { ZodForm } from "~/forms/zod-form";
import { QuizGame, QuizGameParticipant } from "~/models/peapletrasure/types";
import { reactApi } from "~/utils/api";

const FormSchema = z.object({
  username: z.string(),
  privacySigned: z.literal(true),
});

export function RegisterToGame({
  game,
  onDone,
}: {
  game: Pick<QuizGame, "id" | "name">;
  onDone: (participant: QuizGameParticipant) => void;
}) {
  const { data } = useSession();
  const register = reactApi.game.member.register.useMutation();

  const user = data?.user;
  if (!user) {
    throw new Error("user not found");
  }

  return (
    <ZodForm
      schema={FormSchema}
      initialValues={{
        username: user.name,
      }}
      onSubmit={async (data) => {
        const res = await register.mutateAsync({
          ...data,
          gameId: game.id,
        });
        onDone(res);
      }}
    >
      {({ handleSubmit, invalid, submitting }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-2 max-w-md"
        >
          <div className="text-white">
            <h1 className="text-xl font-semibold">
              Iscriviti al gioco <span className="italic"> {game.name}</span>
            </h1>
            <p className="mt-3">
              Inserisci il tuo username, che apparirà nella classifica, e dai il
              consenso alla privacy per poter iniziare a giocare
            </p>
          </div>
          <div className="mb-4">
            <TextField
              type="text"
              name="username"
              label={<span className="text-white">Username</span>}
            />
            <SwitchField
              label={
                <span className="text-white">
                  * Ho letto e accosento al trattamento della{" "}
                  <Link
                    target="_blank"
                    href="https://www.iubenda.com/privacy-policy/86855038"
                  >
                    privacy policy
                  </Link>
                </span>
              }
              name="privacySigned"
            />
          </div>
          <div className="pt-4">
            <button
              disabled={invalid}
              className={clsx("btn btn-primary w-full", {
                loading: submitting,
              })}
              type="submit"
            >
              Inizia
            </button>
          </div>
        </form>
      )}
    </ZodForm>
  );
}
