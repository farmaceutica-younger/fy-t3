import { expect, test, describe } from "vitest";
import { State, interpret } from "xstate";
import { membershipMachine } from "./member.fms";

describe("membership", () => {
  test("should be in member state", () => {
    const actor = interpret(membershipMachine).start(State.from("member"));
    expect(actor.getSnapshot().matches("member")).toBe(true);
    actor.send("admin.add_to_board");
    expect(actor.getSnapshot().matches("member.board")).toBe(true);

    actor.send("admin.remove_from_board");
    expect(actor.getSnapshot().matches("member.ordinary")).toBe(true);
  });

  test("shoud be in rejected state", () => {
    const actor = interpret(membershipMachine).start();
    actor.send("member.request");
    actor.send("admin.reject");
    expect(actor.getSnapshot().matches("rejected")).toBe(true);
  });
});
