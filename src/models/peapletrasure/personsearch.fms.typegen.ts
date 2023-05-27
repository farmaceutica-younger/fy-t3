// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.checkIsRegistered": {
      type: "done.invoke.checkIsRegistered";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.checkIsRegistered": {
      type: "error.platform.checkIsRegistered";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    checkIsRegistered: "done.invoke.checkIsRegistered";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: "checkIsRegistered";
  };
  eventsCausingActions: {};
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    checkIsRegistered: "xstate.init";
  };
  matchesStates:
    | "determining"
    | "leaderBoard"
    | "quiz"
    | "registering"
    | "starting";
  tags: never;
}
