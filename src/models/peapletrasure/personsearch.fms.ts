import { assign, createMachine } from "xstate";
import { Question, QuizGame, QuizGameParticipant } from "./types";

type QuestionWithId = Question & { id: string };
export const personSearchMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcwCdYHsB2BlMAhmgMYAWAdADaYEQCW2UAxBDmOQwG6YDW71tAOIEAtmADaABgC6iFJlh0ALnRxyQAD0QBmAEwA2cvsnbJAFj3aA7AE4LARgCsAGhABPRFYAc5G-t029laSXlb2ko7aZgC+0a6oGDj4RGRUNPSMTOhomGjkyJQESgBmuSJpQqISMurICsqq2OpaCFFm5BH6+vY2dpKSVl2uHq1m7QG6Xmb2ZgH9+o6x8ehYeIQkFAIQAKJoOWhMAK6w6ORoYEpoblKySCB1iipqdy3a-uTTxub+CwvDiLp7D5HI4xpFfv4QV4lvcVkl1qktpAmDdavUnk0Xoh9FNyECrI4FrpvF5uvZ-q1zORHH5tKCQvpbCYrDCEqtkhsKhBkeJ7Ld5I9Gs1sbj8YTHMSvKT7OT3Ih7MZyKSbF5vjYrASrLNWXC1ikKOcoHRYEp0AxmMdTobjabzhBUXcHg1nqAWuErLpfAErKZjD0wvoKU57ORtDY9LNQfoxj0YnFYYk9ZzubaRAxzSw2BxsNw+FyAIqHOAYh0C52Y13ykHaciA0JTAbWYJmIORcgehaDbRTcW6HWJjmpFPoNPYDOsbDsLi8fjpQvFxq8-n3dFCrEIJxtuveMyNjXmCmmdrBbT2XT9CL2KJ9+Ns+H68gAR0OdAAXkcTnliNQTqWV4KXU0eVw0MfQ7DAyYvHCcIXDlBADBDLxHAJMwFiBSIFUWW9dUHChnzfD9TgIbBYAAd3QSA-ydDFhQ3LUfH8JwUJVYk9ApAIjCBMDHEkXRzzMD0on7dkETwl930tPJkByYo6Eoapl2otdK3gyQcSMXQ6SvD0PUcJx2JDTS6XAkErwMNTYnjbBMG5eBHRw0S0QAisgIQABaQM4I8wwDGjSQVRpSQgQE4T705LZzSc8taNmINVQ+GVUObEF1TjZYB1Erldn2KKaPXQka20YzGRmHi9JsdjulDVC3hsTTAiBexQqTRF0kgXLlNc5CawMLwAnKuwz1gkZGtrUkBKCsM1LqrD0pEh9rRNM1GA6wCWj6DpNLMQJ+lBPxhvlLUlTA2xvF0ASdNmhN5uTC4R3TFbHVXNb5XOwxeKiQZ-N3OxtCDLoPgwvRVVjEJmtwp9xNWly3S8OqlRsNTHCgsMeIquCgU9GwgZxCIfRpcHMvk2h0AAIRoNAIGh2jzyKvF-KCfyWJmP6Mb63wMPOvi3lBIrCYfaTMFk+TqfXPj-I6XcoMvBUfiDOl2x9WYw1QvqBhZSygA */
  initial: "loading",
  schema: {} as {
    events: PersonSearchMachineEvents;
    services: {
      loadGame: {
        data: {
          game: QuizGame;
          participant: QuizGameParticipant | null;
        };
      };
      loadQuestion: {
        data: QuestionWithId | undefined;
      };
    };
    context: {
      game: QuizGame;
      currentQuestion?: QuestionWithId;
      selectedReponse: string;
      participant?: QuizGameParticipant;
    };
  },
  tsTypes: {} as import("./personsearch.fms.typegen").Typegen0,
  id: "personSearch",
  states: {
    loading: {
      invoke: {
        id: "loadGame",
        src: "loadGame",
        onDone: [
          {
            id: "loadgame",
            cond: (_, evt) => !!evt.data,
            target: "loaded",
            actions: assign((_, evt) => {
              return {
                game: evt.data.game,
                participant: evt.data.participant,
              };
            }),
          },
        ],
        onError: {
          target: "loadError",
        },
      },
    },
    loadError: {
      on: {
        "user.retry": {
          target: "loading",
        },
      },
    },
    loaded: {
      on: {
        "": [
          {
            target: "determining",
            cond: (ctx) => !!ctx.participant,
            description: "participant is already registered",
          },
          {
            target: "registering",
            description: "participant is not registered",
          },
        ],
      },
    },
    registering: {
      on: {
        "user.registered": {
          target: "determining",
          actions: assign((_, evt) => {
            return {
              participant: evt.data,
            };
          }),
        },
      },
    },
    determining: {
      invoke: {
        id: "loadQuestion",
        src: "loadQuestion",
        description: "Loading question",
        onDone: [
          {
            id: "quesiton loaded",
            cond: (_, evt) => !!evt.data,
            target: "quiz",
            actions: assign((_, evt) => {
              return {
                currentQuestion: evt.data,
              };
            }),
          },
          "profile",
        ],
      },
    },
    quiz: {
      on: {
        "user.answered": {
          actions: assign((_, evt) => {
            return {
              participant: evt.result,
            };
          }),
        },

        "user.profile": {
          target: "profile",
        },
      },
    },
    profile: {},
  },
});

type PersonSearchMachineEvents =
  | {
      type: "user.registered";
      data: QuizGameParticipant;
    }
  | {
      type: "user.close";
    }
  | {
      type: "user.retry";
    }
  | {
      type: "user.answered";
      result: QuizGameParticipant;
    }
  | {
      type: "user.profile";
    };
