"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useCloseDialog, useOpenDialog } from "~/hooks/dialog/dialog";
import { QuizGame } from "~/models/peapletrasure/types";
import { DataTable } from "~/ui/table/data";
import { reactApi } from "~/utils/api";

export const columns: ColumnDef<QuizGame>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    header: "# Questions",
    cell: ({ row }) => {
      const cnt = Object.entries(row.original.questions).length;
      return <span>{cnt}</span>;
    },
  },
  {
    id: "actions",
    header: () => <span />,
    cell: ({ row }) => {
      const openDialog = useOpenDialog();

      const id = row.original.id;

      return (
        <div>
          <a
            href={`/dashboard/admin/games/edit/${id}`}
            className="btn-warning btn-xs btn"
          >
            edit
          </a>
          <button
            type="button"
            onClick={() => openDialog(<DeleteModal gameId={id} />)}
            className="btn-error btn-xs btn"
          >
            delete
          </button>
        </div>
      );
    },
  },
];

export function GamesTable({ games }: { games: QuizGame[] }) {
  return (
    <div className="m-4">
      <DataTable columns={columns} data={games} />
    </div>
  );
}

function DeleteModal({ gameId }: { gameId: string }) {
  const close = useCloseDialog();
  const utils = reactApi.useContext();
  const deleteMut = reactApi.game.admin.deleteGame.useMutation({
    onSuccess: async () => {
      await utils.game.admin.invalidate();
      close();
    },
  });

  return (
    <div>
      <h3 className="">Sei sicuro di voler cancellare?</h3>
      <div className="flex flex-row-reverse">
        <button
          type="button"
          className="btn-danger btn-sm btn"
          onClick={() => close()}
        >
          Annulla
        </button>
        <button
          type="button"
          onClick={async () =>
            await deleteMut.mutateAsync({
              gameId,
            })
          }
          className="btn-danger btn-sm btn"
        >
          Cancella
        </button>
      </div>
    </div>
  );
}
