"use client";
import { useMachine } from "@xstate/react";
import { useSearchParams } from "next/navigation";
import { personSearchMachine } from "~/models/peapletrasure/personsearch.fms";
import { Loading } from "~/ui/loading";
import { reactApi } from "~/utils/api";
import { Quiz } from "./quiz";
import { RegisterToGame } from "./register";
import { UserProfile } from "./profile";

type PageProps = {
  params: {
    gameId: string;
  };
};

export default function GamePage(props: PageProps) {
  const gameId = props.params.gameId;
  const [state, send] = useGameMachine(props.params.gameId);

  if (state.matches("loading")) {
    return <Loading />;
  }

  const game = state.context.game;

  if (state.matches("registering")) {
    return (
      <RegisterToGame
        game={game}
        onDone={(participant) =>
          send({
            type: "user.registered",
            data: participant,
          })
        }
      />
    );
  }

  if (state.matches("quiz")) {
    // rome-ignore lint/style/noNonNullAssertion: <explanation>
    const question = state.context.currentQuestion!;
    const selectedQuestion =
      state.context.participant?.responses[question.id]?.selectedOption;
    return (
      <Quiz
        gameId={gameId}
        question={question}
        selectedOption={selectedQuestion}
        onClickProfile={() => {
          send("user.profile");
        }}
        onResponse={(participant) =>
          send({
            type: "user.answered",
            result: participant,
          })
        }
      />
    );
  }

  if (state.matches("profile")) {
    return (
      <UserProfile
        game={state.context.game}
        // rome-ignore lint/style/noNonNullAssertion: <explanation>
        participant={state.context.participant!}
      />
    );
  }

  return <div>{JSON.stringify(state.value, null, 2)}</div>;
}

function useGameMachine(gameId: string) {
  const utils = reactApi.useContext();
  const searchParams = useSearchParams();

  return useMachine(personSearchMachine, {
    services: {
      loadGame: async (ctx) => {
        try {
          const { game, participant } = await utils.game.member.loadGame.fetch({
            gameId: gameId,
          });
          return { game, participant };
        } catch (e) {
          throw new Error("cannot load game");
        }
      },
      loadQuestion: async (ctx) => {
        const questionId = searchParams?.get("questionId");
        if (!questionId) {
          return undefined;
        }
        const question = ctx.game.questions[questionId];
        return question && { ...question, id: questionId };
      },
    },
  });
}
