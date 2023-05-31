"use client";

import clsx from "clsx";
import { z } from "zod";
import { TextField } from "~/forms/fields/text-field";
import { ZodForm } from "~/forms/zod-form";
import { useCloseDialog, useOpenDialog } from "~/hooks/dialog/dialog";
import { Loading } from "~/ui/loading";
import { reactApi } from "~/utils/api";
import { GamesTable } from "./games-table";

export default function GamePage() {
  return (
    <div className="">
      <Header />
      <GameTable />
    </div>
  );
}

function Header() {
  const openDialog = useOpenDialog();
  return (
    <div className="flex h-20 flex-row-reverse items-center px-4">
      <button
        type="button"
        className="btn-primary btn"
        onClick={() => openDialog(<CreateGame />)}
      >
        Crea Gioco
      </button>
    </div>
  );
}

function GameTable() {
  const q = reactApi.game.admin.listGames.useQuery({
    skip: 0,
    take: 100,
  });

  if (q.isLoading) {
    return <Loading />;
  }

  if (q.isError) {
    return <div>Error</div>;
  }

  return (
    <div className="">
      <GamesTable games={q.data} />
    </div>
  );
}

const CreateGameSchema = z.object({
  name: z.string(),
  description: z.string(),
});

function CreateGame() {
  const close = useCloseDialog();
  const utils = reactApi.useContext();
  const mut = reactApi.game.admin.createGame.useMutation({
    onSuccess: async () => {
      await utils.game.admin.invalidate();
      close();
    },
  });

  return (
    <ZodForm
      schema={CreateGameSchema}
      onSubmit={async (input) => await mut.mutateAsync(input)}
    >
      {({ handleSubmit, errors, submitting }) => {
        return (
          <form onSubmit={handleSubmit} className="">
            <TextField label="nome del gioco" name="name" />
            <TextField label="description" name="description" numRows={4} />
            <button
              type="submit"
              className={clsx("btn-primary btn", {
                loading: submitting,
              })}
            >
              Crea Game
            </button>
          </form>
        );
      }}
    </ZodForm>
  );
}
