import { createMachine } from "xstate";

export const TicketMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOkIHcBidfdAGwE9YAXEggNzmdynWbADaABgC6iUAAcA9rFzcp+cSAAeiIQBoQDNQF8dmtFjyFSUiWHzVajFm3ycWPPoNFLps+YqQrEAFgCMAOwkAMxCQgAcQgBMgREAbACsISEAnIma2gghiYkk8SFR-okRIb7xvnoGGDgExCQArvgQYABOAPocXE6eVvRMrJh0MpDCYt7ucrgKSqoIvolCJP6+QoFCieuBgf4R-pmIeySL4TH+If5BvgtVIIa1Jo3NbZ323by9NP22mAr8mMwGrA2mM3DIpjNvHM9qkSOVfBEEYl-NEwolfAcEEdfKlcalokkhDkIrjbvdjPUmi0Ol1HB9ppYvjZWHQwOhOKCJuDPLM-OiSJFcf4hOlrpsMVpENEhP4SIEcbiQvENjLoukyTUKaQhiMIH1mSRWmAzBZOZJuQzeQgVrDYmV0akhL5AvFlSFMdLZdEFaklSqUer9HdNXVSOZmgQoJQgW1DWAJIwzSBJjyoYhHRESKlETlFRsIhFopicnkCkUSmUKnog-gpC14N5yaGwR5LWmEABaREkaLFHGlS4hQIpQKYjvFEIC+KpeUpIQFYURDVGUNkMDkFsQrygOYdpU9vvZi7nYdK+JjpLHaeBRLxReREXRZcPeom7fJi2QneIELS46ohYCURAodg9GU5QVAsEnKDYgmfLUnmpV4HG4ekvw-Vt0LmdZ4nyUoF2zOJ4gLYtcnyQoZQreF4NXHVgQgTdU2-eYi0la1fXyV1XSdXJEl7eUaMecMIEjRi22Y4UymWUoSm9VFomRUc2JLcjy1KajqyAA */
  initial: "new",
  tsTypes: {} as import("./ticket.fms.typegen").Typegen0,
  states: {
    new: {
      on: {
        "analyst.investigate": {
          target: "under_investigation",
        },
      },
    },
    open: {
      on: {
        "analyst.investigate": {
          target: "under_investigation",
        },
      },
    },
    under_investigation: {
      on: {
        "analyst.closed": {
          target: "closed",
        },
        "analyst.contectuser": {
          target: "pending",
        },
        "analyst.leave": {
          target: "open",
        },
      },
    },
    closed: {
      on: {
        "analyst.reopen": {
          target: "open",
        },
      },
    },
    pending: {
      on: {
        "user.reply": {
          target: "under_investigation",
        },
      },
    },
  },
});
