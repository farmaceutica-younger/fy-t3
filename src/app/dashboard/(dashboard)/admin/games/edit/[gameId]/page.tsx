"use client";

import { EyeIcon, PencilIcon, QrCodeIcon } from "@heroicons/react/20/solid";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { GameQRCode } from "./qrcode";
import { openDialog } from "~/hooks/dialog/dialog";
import { Question } from "~/models/peapletrasure/schema";
import { type QuizGame } from "~/models/peapletrasure/types";
import { Loading } from "~/ui/loading";
import { DataTable } from "~/ui/table/data";
import { reactApi } from "~/utils/api";
import { AddQuestionDialog, UpdateQuestionDialog } from "./dialogs";

const questionsTableColumns: ColumnDef<
  Question & { id: string; game: QuizGame }
>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return <span className="">{row.original.id}</span>;
    },
  },
  {
    accessorKey: "person",
    header: "Persona",
    cell: ({ row }) => {
      return <span>{row.original.personName}</span>;
    },
  },
  {
    accessorKey: "question",
    header: "Domanda",
    cell: ({ row }) => {
      return <p className="w-96">{row.original.question}</p>;
    },
  },
  {
    accessorKey: "actions",
    header: "Azioni",
    cell: ({ row }) => {
      const { id, game } = row.original;
      const url = `https://www.farmaceuticayounger.science/games/${game.id}?question=${id}`;
      return (
        <div>
          <button
            type="button"
            className="btn btn-circle btn-ghost btn-sm"
            onClick={() => {
              openDialog(<UpdateQuestionDialog questionId={id} game={game} />);
            }}
          >
            <PencilIcon className="h-4" />
          </button>
          <Link
            className="btn btn-circle btn-ghost btn-sm"
            target="_blank"
            rel="noreferrer"
            href={`/games/${game.id}?questionId=${id}`}
          >
            <EyeIcon className="h-4" />
          </Link>
          <button
            type="button"
            className="btn btn-circle btn-ghost btn-sm"
            onClick={() => {
              openDialog(<GameQRCode url={url} />);
            }}
          >
            <QrCodeIcon className="h-4" />
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

  if (q.isLoading) {
    return <Loading />;
  }

  if (q.isError) {
    return <span>error</span>;
  }

  return (
    <div className="p-4">
      <div className="h-20 flex justify-end items-center space-x-2">
        <Link href={`/games/${params.gameId}`} className="btn btn-ghost btn-sm">
          View
        </Link>
        <button
          type="button"
          onClick={() => {
            openDialog(<AddQuestionDialog game={q.data} />);
          }}
          className="btn btn-primary btn-sm btn-outline"
        >
          Aggiungi Domanda
        </button>
      </div>

      <div>
        <DataTable
          columns={questionsTableColumns}
          data={Object.entries(q.data.questions).map(([id, qq]) => ({
            ...qq,
            id,
            game: q.data,
          }))}
        />
      </div>
    </div>
  );
}

type PageProps = {
  params: {
    gameId: string;
  };
};
