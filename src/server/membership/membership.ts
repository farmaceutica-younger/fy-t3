import { PrismaClient } from "@prisma/client";
import { interpret, State } from "xstate";
import { membershipMachine } from "~/fsm/association/member.fms";

export class Membership {
  constructor() {
    const actor = interpret(membershipMachine).start(State.from("member"));
  }
}
