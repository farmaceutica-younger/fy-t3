import {
  AssociationMembership,
  MembershipStatus,
  MembershipType,
} from "@prisma/client";
import clsx from "clsx";

const baseClass =
  "inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium ring-1 ring-inset";

export const MemberStatusBadge = ({
  status,
}: Pick<AssociationMembership, "status">) => {
  if (status === MembershipStatus.PENDING) {
    return (
      <span className={clsx(baseClass, "text-yellow-700  ring-yellow-600/20")}>
        Da Approvare
      </span>
    );
  } else if (status === MembershipStatus.APPROVED) {
    return (
      <span className={clsx(baseClass, "text-green-700  ring-green-600/20")}>
        Approvato
      </span>
    );
  } else if (status === MembershipStatus.COMPLETED) {
    return (
      <span className={clsx(baseClass, "text-blue-700  ring-blue-600/20")}>
        Iscritto
      </span>
    );
  } else if (status === MembershipStatus.REJECTED) {
    return (
      <span className={clsx(baseClass, "text-red-700  ring-red-600/20")}>
        Rifiutato
      </span>
    );
  } else {
    return (
      <span
        className={clsx(
          baseClass,
          "text-red-700 ring-1 ring-inset ring-red-600/20",
        )}
      >
        Sconosciuto
      </span>
    );
  }
};

export const MemberRoleBadge = ({
  type,
}: Pick<AssociationMembership, "type">) => {
  if (type === MembershipType.NORMAL) {
    return <></>;
  } else if (type === MembershipType.DIRECTORIAL) {
    return (
      <span className={clsx(baseClass, "text-green-700  ring-green-600/20")}>
        Direttivo
      </span>
    );
  } else if (type === MembershipType.ONORARY) {
    return (
      <span className={clsx(baseClass, "text-blue-700  ring-blue-600/20")}>
        Onorario
      </span>
    );
  }
  return <></>;
};
