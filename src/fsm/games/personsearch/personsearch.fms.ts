import { createMachine } from "xstate";

export const personSearchMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcwCdYHsB2BlMAhmgMYAWAdADaZQwQDyArgC4DEAMvQOICSAcgG0ADAF1EKTLACWzKTnEgAHogCMAdgBM5AKwAObQE4AzABYhJg9qMAaEAE9EuteQMqAbG73qjHoW40AvgG2qBg4+ERk5GhgUFKwzOhS2FCsAEoAory4ACoZmQAiwmJIIMiSMnLYCsoIJiom5GomGiraKgZ+bkYGurYOCE4u7p663r7+QSHoWHiEJBTUBBDJqTy4APoAigCqPABaxQrl0rLypbVuarrkQsZuBhqeGtpqav2OKuQWBr8aY34NAYHlMyjNwvMoksVilWOsNuwMgBBAr5ABC9CRaSKomOFTO1QuiCuNzuPkez1e73siA0Qi0Gh+mjGLQ8JjUoNCswiC3IAEdGFIAF6sAiwbAAdyIYCOpROlXOoFqlmcPV0RjU5l6nleH0GXx+fwB-mBBiCwRA2EwEDgx3Bc0ipDxpyqNUQAFo3HrPZz7TyoTQ6ExmM6FYSlYgWnrdDd6h4vGofG4-CZfWEHbyYnEEkkUqGCW6EP8vurDBoga4VHSnNHYyME0mU2nuZDFphlqt866iQhXkIdNoTG4h+5dOXtLXvvWxomJqmLVyIY7+YKhV3FUpHJodJqXkJmvU3tGvr9T8XAabm0veZRCDa0Gj22gIOvw5uECohGPbtcGkIGh0w4TjSgwGOQjKnm0fi-D0bjmgEQA */
  initial: "loggedOut",
  schema: {} as {
    events: PersonSearchMachineEvents;
  },
  tsTypes: {} as import("./personsearch.fms.typegen").Typegen0,
  id: "personSearch",
  states: {
    loggedOut: {
      on: {
        LOGIN: "registering",
      },
    },
    registering: {
      on: {
        REGISTERED: "loading",
      },
    },
    loading: {
      on: {
        IS_QUIZ: {
          target: "quiz",
        },
        IS_LEADERBOARD: {
          target: "leaderBoard",
        },
      },
    },
    quiz: {
      on: {
        asnware: {
          target: "leaderBoard",
        },
      },
    },
    leaderBoard: {},
  },
});

type PersonSearchMachineEvents =
  | {
      type: "LOGIN";
    }
  | {
      type: "REGISTERED";
    }
  | {
      type: "IS_QUIZ";
    }
  | {
      type: "IS_LEADERBOARD";
    }
  | {
      type: "asnware";
    };
