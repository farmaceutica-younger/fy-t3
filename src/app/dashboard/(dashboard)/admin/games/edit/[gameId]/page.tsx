"use client";

import { ColumnDef } from "@tanstack/react-table";
import cuid from "cuid";
import { GameQRCode } from "~/app/dashboard/(dashboard)/afi/qrcode";
import { TextField } from "~/forms/fields/text-field";
import { ZodForm } from "~/forms/zod-form";
import { useCloseDialog, useOpenDialog } from "~/hooks/dialog/dialog";
import {
  Question,
  QuestionSchema,
  Questions,
} from "~/models/peapletrasure/schema";
import { QuizGame } from "~/models/peapletrasure/types";
import { Loading } from "~/ui/loading";
import { DataTable } from "~/ui/table/data";
import { reactApi } from "~/utils/api";

const questionsTableColumns: ColumnDef<
  Question & { id: string; gameId: string }
>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <span className="">{row.original.id}</span>;
    },
  },
  {
    accessorKey: "question",
    header: "Domanda",
    cell: ({ row }) => {
      return <span>{row.original.question}</span>;
    },
  },
  {
    accessorKey: "actions",
    header: "Azioni",
    cell: ({ row }) => {
      const openDialog = useOpenDialog();
      const { id, gameId } = row.original;
      const url = `https://www.farmaceuticayounger.science/games/${gameId}?question=${id}`;
      return (
        <div>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => {
              openDialog(<GameQRCode url={url} />);
            }}
          >
            Genera QR
          </button>
        </div>
      );
    },
  },
];

export default function EditGamePage({ params }: PageProps) {
  const q = reactApi.game.admin.getGame.useQuery({
    gameId: params.gameId,
  });

  const openDialog = useOpenDialog();

  if (q.isLoading) {
    return <Loading />;
  }

  if (q.isError) {
    return <span>error</span>;
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          openDialog(<QuestionForm game={q.data} />);
        }}
      >
        Add
      </button>

      <div>
        <DataTable
          columns={questionsTableColumns}
          data={Object.entries(q.data.questions).map(([id, qq]) => ({
            ...qq,
            id,
            gameId: q.data.id,
          }))}
        />
      </div>
      {/* <pre>{JSON.stringify(q, null, 2)}</pre>; */}
    </div>
  );
}

type PageProps = {
  params: {
    gameId: string;
  };
};

function QuestionForm({ game }: { game: Pick<QuizGame, "id" | "questions"> }) {
  const setQuestions = useSetQuestions();
  const closeDialog = useCloseDialog();
  return (
    <div className="w-96">
      <ZodForm
        schema={QuestionSchema}
        onSubmit={async (q) => {
          await setQuestions(game.id, {
            ...game.questions,
            [cuid()]: q,
          });
          closeDialog();
        }}
        initialValues={{
          question: "",
          options: ["", "", "", ""],
        }}
      >
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <TextField name="question" label="La tua domanda" type="text" />

              <TextField name="options[0]" label="Risposta 1" type="text" />
              <TextField name="options[1]" label="Risposta 2" type="text" />
              <TextField name="options[2]" label="Risposta 3" type="text" />
              <TextField name="options[3]" label="Risposta 3" type="text" />

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
