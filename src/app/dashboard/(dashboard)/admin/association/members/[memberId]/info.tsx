import { inferRouterOutputs } from "@trpc/server";
import Link from "next/link";
import { AppRouter } from "src/server/mod";
import { MemberStatusBadge } from "../../status";

export type MemberInfo =
  inferRouterOutputs<AppRouter>["association"]["admin"]["getMemberWithQuestionairre"];

export type MemberPageComponentProps = {
  data: MemberInfo;
};

export const MemberInfo = ({ data }: MemberPageComponentProps) => {
  const questionairre = data.questionairre;
  const anwers = data.answer;

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="flex justify-between">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Dettagli Associato
          </h3>
          <p>
            <MemberStatusBadge status={data.member.status} />
          </p>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Nome</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {data.member.profile.firstName}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Cognome</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {data.member.profile.lastName}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {data.member.user.email}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Linkedin</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {data.member.profile.linkedinUrl && (
                <Link
                  className="text-pink-500 underline hover:text-pink-800"
                  href={data.member.profile.linkedinUrl}
                  target="_blank"
                >
                  Profilo Linkedin
                </Link>
              )}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Telegram</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {data.member.profile.telegramUsername}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Stato</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <MemberStatusBadge status={data.member.status} />
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Creazione</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {data.member.createdAt!.toISOString()}
            </dd>
          </div>
          {questionairre?.questions?.map((question) => (
            <div
              key={question.cuid}
              className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5"
            >
              <dt className="text-sm font-medium text-gray-500">
                {question.description}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {(anwers?.answers as any)[question.cuid]}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
