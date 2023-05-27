"use client";
import { useMachine } from "@xstate/react";
import { personSearchMachine } from "~/models/peapletrasure/personsearch.fms";
import { reactApi } from "~/utils/api";

type PageProps = {
  params: {
    gameId: string;
  };
};

export default function GamePage(props: PageProps) {
  const [state, send] = useGameMachine();

  return <div>{JSON.stringify(state.value, null, 2)}</div>;
}

function useGameMachine() {
  return useMachine(personSearchMachine, {
    services: {
      checkIsRegistered: async (ctx, evn) => {
        if (evn.type === "xstate.init") {
          return true;
        }
        return true;
      },
    },
  });
}
