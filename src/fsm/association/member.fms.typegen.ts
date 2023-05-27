// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {};
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {};
  matchesStates:
    | "approved"
    | "blocked"
    | "member"
    | "member.board"
    | "member.honorary"
    | "member.normal"
    | "member.torenew"
    | "rejected"
    | "unassociated"
    | "wait_for_approval"
    | { member?: "board" | "honorary" | "normal" | "torenew" };
  tags: never;
}
