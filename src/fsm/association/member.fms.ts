import { createMachine } from "xstate";

type Events =
  | {
      type: "member.request";
    }
  | {
      type: "member.fee_payed";
    }
  | {
      type: "member.reject_fee";
    }
  | {
      type: "admin.fee_not_payed";
    }
  | {
      type: "admin.approve";
    }
  | {
      type: "admin.reject";
    }
  | {
      type: "admin.make_member";
    }
  | {
      type: "admin.remove_from_board";
    }
  | {
      type: "admin.remove_from_honorary";
    }
  | {
      type: "admin.add_to_board";
    }
  | {
      type: "admin.elect_honorary";
    }
  | {
      type: "admin.renew_memberhip";
    };

export const membershipMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QFszIEZgE4AsCWADgHQCuAdgIaywD2AxnhQC6QDEqG2RWYAjiXCYBtAAwBdRKAI1YeJnhplJIAB6IA7EQAcAJh1aALADYAnEaMBGAMzWArBYA0IAJ6IDWouoMiRJ9VvU-Cy0rKwMAX3CnDkxcQiIAdwo5AH0AMxosFIoCAiwaADcKABtWCghkPDIiHLzCsFEJJBBpWXlFZTUEayIDExEtCwM+vRN3C3UnVwR9AyIrWx0jWys9QJEwq0jotFj8YiTUjKza-KLS8srqngArMDphcWVWuQUlZq7vC20dEwtbAw6Ly2dS-KaIYK2IgmAKWUEWXxGUERKIgGLYfY1XJnNjorBENJgMApAgUZyQRrPGSvDofCEI+Y6dwGf7eAYGKxacEIIx6bQWEwmHRhPxGXw6bZo3YY+KneoQMoVKpEZAUADWxLxlOaL3a71AXQRIkZzNZPkMnO5SKs8wFfxhOn+5lskrxmLlBVx0vxt3uTHSRO1Umpes6EKsJmhwp0tiMzM5RhC3LC3wsRlCFkdHL8InURld3vd2PliquBKJKTINH9pPJECDLRDbzDM1WRHMufUi0dALj3JZc30Jgj6a8oWHW1RbvieKIVawqouSuq5QgKSYNBS6BoFCw9aeOqbtINiFMc1MvNsQuMAN0-dsxq0ZhBaYnIoLnDixFn88XpeVYDFH6KQ4IomS7s4Da6s2dI8mM7ZmDG17LO4OhWos2hmGKILDAKcYfnsM7enOmR-pcyo8GQYAJCk04EFBR76qop7wReSFMihd4uIgtj2Jh5jWIi+gSlOhZEZ+RAbpR1HsMRhLErWFIHsGbQwSeCDqKC7bLCIQwJsY-zcg+3wjpYSKgqsBgrARMrfsRUlgFRCSyRJvoPAGDTKY2qnHsx3QbDoRATAKrLWJYBj9n8QXmOo-xmJZKwojsn6YrODlOf+1TyZW1YkmSSlNCpNJMYaAVBbFfwAmFQz9t42lInhEb6FoNlfiqxHbruCrkdcaD1Ok+TIFuO57gxPklRowREECHIBE+ExctxCBsvMz5dlYphWJp+aiSl4mxEQoHzhBmXcH1noDTQQ1HeBWCQV50G+V0Z4IZeyG3mhS1ioFpm+ICIjCkKkSolWEBwModFUuNLYALR1RMsUrBsCZaMs3Iw-83y2FouYBFYvgTDGSVSntxDkFQtAMMwkBQ8VLa-NCYwWNYaYbfCXHTDDcZEAMuOJkTvIcq1mKHP6xzZMW5y06GsFDPyIgPt4w6CiI33coTQUxro2OxbFzPC7Kks04e0OwQs03eJpsb9IKZgK-2Pircs62bVbO3JYRdmftLal+X0mjuCsTLBF4XwRUtNiBU+HYPssiwIsTdHtRJv4lD7T08VZvRaEHLIBMMun9nLQ7DPYvxbWmBtewd6XUenE0IH4czPjnONwnmVhGb40KBGMfe-IYFhV8nB2dXu9ctk3vScgYXYzUCAQOx4fgqzj-QbLF7sk57I9cDdWAQRPsFT7Ns+LF4C+TF9DIrzbo4AhGw9uSwEBH+pvFQsMvJjHGfyGJ90xITTS2uma2SwRCAiHrtHe6Bij0A1K-E2dNZYxm+BsawugFgchsLYWqHgWQNX6EscKIlIhAA */
  id: "memberhip",
  initial: "unassociated",
  tsTypes: {} as import("./member.fms.typegen").Typegen0,
  schema: {} as {
    events: Events;
    context: null;
  },
  states: {
    unassociated: {
      on: {
        "member.request": {
          target: "wait_for_approval",
        },
      },
    },
    wait_for_approval: {
      on: {
        "admin.approve": {
          target: "approved",
        },
        "admin.reject": {
          target: "rejected",
        },
      },
    },
    approved: {
      on: {
        "member.fee_payed": {
          target: "member",
        },
        "admin.make_member": {
          target: "member",
        },
        "member.reject_fee": {
          target: "unassociated",
        },
        "admin.fee_not_payed": {
          target: "unassociated",
        },
      },
    },

    member: {
      initial: "normal",
      states: {
        normal: {
          on: {
            "admin.add_to_board": {
              target: "board",
            },
            "admin.elect_honorary": {
              target: "honorary",
            },
            "admin.renew_memberhip": {
              target: "torenew",
            },
          },
        },
        torenew: {
          on: {
            "member.fee_payed": {
              target: "normal",
            },
            "member.reject_fee": {
              target: "#memberhip.blocked",
            },
            "admin.fee_not_payed": {
              target: "#memberhip.blocked",
            },
          },
        },
        board: {
          on: {
            "admin.remove_from_board": {
              target: "normal",
            },
          },
        },
        honorary: {
          on: {
            "admin.remove_from_honorary": {
              target: "normal",
            },
          },
        },
      },
    },

    rejected: {
      type: "final",
    },

    blocked: {},
  },
});

export type MembershipMachine = typeof membershipMachine;
