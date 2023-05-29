import cuid from "cuid";
import { TextField } from "~/forms/fields/text-field";
import { ZodForm } from "~/forms/zod-form";
import { closeDialog } from "~/hooks/dialog/dialog";
import {
  QuestionSchema,
  type Questions,
  type Question,
} from "~/models/peapletrasure/schema";
import { type QuizGame } from "~/models/peapletrasure/types";
import { reactApi } from "~/utils/api";

export function AddQuestionDialog({
  game,
}: { game: Pick<QuizGame, "id" | "questions"> }) {
  const setQuestions = useSetQuestions();
  return (
    <QuestionForm
      onSubmit={async (q) => {
        await setQuestions(game.id, {
          ...game.questions,
          [cuid()]: q,
        });
      }}
    />
  );
}

export function UpdateQuestionDialog({
  game,
  questionId,
}: { game: Pick<QuizGame, "id" | "questions">; questionId: string }) {
  const setQuestions = useSetQuestions();
  const q = game.questions[questionId];
  return (
    <QuestionForm
      initialValue={q}
      onSubmit={async (q) => {
        await setQuestions(game.id, {
          ...game.questions,
          [questionId]: q,
        });
      }}
    />
  );
}

function QuestionForm({
  onSubmit,
  initialValue,
}: {
  onSubmit: (v: Question) => Promise<void>;
  initialValue?: Partial<Question>;
}) {
  return (
    <div className="w-96">
      <ZodForm
        schema={QuestionSchema}
        onSubmit={async (q) => {
          await onSubmit(q);
          closeDialog();
        }}
        initialValues={
          initialValue ?? {
            question: "",
            options: ["", "", "", ""],
            personLinkedin: "",
          }
        }
      >
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <TextField
                name="personName"
                label="Nome della persona associata"
                type="text"
              />
              <TextField
                name="personLinkedin"
                label="Linkedin della persona associata"
                type="text"
              />

              <TextField name="question" label="La tua domanda" type="text" />

              <TextField name="options[0]" label="Risposta 1" type="text" />
              <TextField name="options[1]" label="Risposta 2" type="text" />
              <TextField name="options[2]" label="Risposta 3" type="text" />

              <TextField
                name="correctOption"
                label="Risposta Corretta"
                type="text"
              />
              <button type="submit" className="btn btn-sm btn-primary">
                Salva
              </button>
            </form>
          );
        }}
      </ZodForm>
    </div>
  );
}

function useSetQuestions() {
  const utils = reactApi.useContext();
  const m = reactApi.game.admin.setGameQuestions.useMutation({
    onSuccess: async () => {
      await utils.game.admin.invalidate();
    },
  });

  return async (gameId: string, questions: Questions) => {
    return await m.mutateAsync({ gameId, questions });
  };
}
