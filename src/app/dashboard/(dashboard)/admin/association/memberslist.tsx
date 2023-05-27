import { RouterOutputs } from "~/utils/api";
import { MemberRoleBadge, MemberStatusBadge } from "./status";
import { format } from "date-fns";
import { it } from "date-fns/locale";

export type Member =
  RouterOutputs["association"]["admin"]["getMembersWithPayments"][number];

export function MemberList({ members }: { members: Member[] }) {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <TableHeader />
            <tbody className="divide-y divide-gray-200 bg-white">
              {members.map((member) => (
                <MemberRow key={member.id} member={member} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function MemberRow({ member }: { member: Member }): JSX.Element {
  return (
    <tr>
      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
        <div className="flex items-center">
          <div className="h-11 w-11 flex-shrink-0">
            <img
              className="h-11 w-11 rounded-full"
              src={member.user!.image!}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">
              {member.profile.firstName} {member.profile.lastName}{" "}
              <MemberRoleBadge type={member.type} />
            </div>
            <div className="mt-1 text-gray-500">{member.user.email}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        <div className="text-gray-900">
          {member.memberSince && formatDate(member.memberSince)}
        </div>
        <div className="mt-1 font-mono text-xs text-gray-400">{member.id}</div>
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        <MemberStatusBadge status={member.status} />
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        {member.type}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        <MemberPayments member={member} />
      </td>
      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  );
}

function MemberPayments({ member }: { member: Member }) {
  const lastPayment = member.payments[0];
  const totalPayments = member.payments.length;
  const totalPayed =
    member.payments.reduce((acc, payment) => acc + payment.amount, 0) / 100;

  return (
    <>
      <p className="whitespace-nowrap">
        <span className="font-bold">{totalPayed}€</span>
        <span className="ml-2">{totalPayments} transactions</span>
      </p>
      {lastPayment && (
        <p className="font-xs whitespace-nowrap text-gray-400">
          <span>last</span> <span>{formatDate(lastPayment.createdAt)}</span>
        </p>
      )}
    </>
  );
}

function formatDate(d: Date) {
  return format(d, "dd MMM yyyy - HH:mm", { locale: it });
}

function TableHeader() {
  return (
    <thead>
      <tr>
        <th
          scope="col"
          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
        >
          Nome
        </th>
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Iscrizione
        </th>
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Stato
        </th>
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Role
        </th>
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Pagamenti
        </th>
        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
}
