import { createMachine } from "xstate";

export const personSearchMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcwCdYHsB2BlMAhmgMYAWAdLAC5FUCW2UAxBDmOQwG6YDW7ZYYjwCSsAEpgodaukgBtAAwBdRCkyw69HKpAAPRAGYA7OQCcRgBwBGBQDYArDYP2ATABYFbgDQgAnogBaG3tyFwNbCzcLUzc3FyMjBwBfJJ9UDBx8IjJKGjR6RhY2DmxuPnIBIVEJKRk0eSsVJBBkdU06bWb9BDDyaNNTW1sXR3tbAwNvP0DJ8g8LIzCYuIShlLT0LDxCEgp62qp0BmYxAFEAcWFcABVTs4ARRSa1DS1sHW77Iytye0n-qwuKxDRY+fwIALOMwKBZLWLxRL2NzrFqbTI7HIQMCHNAAWwYxyYVwA+gBFACqwgAWk8dK1Xh13l1EIsDHMIkZ7GDEFYrCYDNZ7AorKYwkM7FYUektllduQsTj8dhCSSADKnACC9zuACEAPIasSPZR0tpvD6IeyucgiyIKMZAkEubk9KwhCYWP4GPnhWx2ZGpVEZbbZCgARwArnQAF5MAjYWAAd3QtOa9PanVA3UGJntbmGnlMFgcXxdvP5guFot9EpSgewmCx8DTaJDu1NDMzekCTjMMSM3ucizcVhdkJGcwmtjcRcWYQMLilrdlOWotGOHYzTKzgStfbcA6sQ-cCgGU3BATCJlMU5nsPnLkXgel6ND5H20hxG7TZsZFoQI4KHMcSmAoCQWOEbiltMEJQqBsIGMsCIOAGGzBiuFAKugSrfi8W7-mMPzTpExhcjB5bkAKbpVmKfq2JKz7Lhi4ZRtGm7msyCALERQIKN6Z58kYZZ8pRlYirRtaMehzHkAANoQWJoDqmBEBA7F-pxvK8ja3zRMKI6DFBwkVtR4k1rYdZJEAA */
  initial: "starting",
  schema: {} as {
    events: PersonSearchMachineEvents;
    services: {
      checkIsRegistered: {
        data: boolean;
      };
    };
  },
  tsTypes: {} as import("./personsearch.fms.typegen").Typegen0,
  id: "personSearch",
  states: {
    starting: {
      invoke: {
        id: "checkIsRegistered",
        src: "checkIsRegistered",
        onDone: [
          {
            id: "is registered",
            cond: (_, evt) => evt.data,
            target: "determining",
          },
          {
            target: "registering",
          },
        ],
      },
    },
    registering: {
      on: {
        REGISTERED: "determining",
      },
    },
    determining: {
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
        answer: {
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
      type: "answer";
    };
