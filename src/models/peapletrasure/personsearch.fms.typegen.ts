// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "": { type: "" };
    "done.invoke.loadGame": {
      type: "done.invoke.loadGame";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.loadQuestion": {
      type: "done.invoke.loadQuestion";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.loadGame": {
      type: "error.platform.loadGame";
      data: unknown;
    };
    "error.platform.loadQuestion": {
      type: "error.platform.loadQuestion";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    loadGame: "done.invoke.loadGame";
    loadQuestion: "done.invoke.loadQuestion";
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: "loadGame" | "loadQuestion";
  };
  eventsCausingActions: {};
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    loadGame: "user.retry" | "xstate.init";
    loadQuestion: "" | "user.registered";
  };
  matchesStates:
    | "determining"
    | "loadError"
    | "loaded"
    | "loading"
    | "profile"
    | "quiz"
    | "registering";
  tags: never;
}
