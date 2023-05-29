"use client";

import clsx from "clsx";
import { useSession } from "next-auth/react";
import { Loading } from "~/ui/loading";
import { reactApi } from "~/utils/api";

export interface Rank {
  name: string;
  points: number;
  position: number;
  questions: number;
  correctQuestions: number;
}

export default function LeaderBaord(props: { params: { gameId: string } }) {
  const q = reactApi.game.admin.getRank.useQuery({
    gameId: props.params.gameId,
    skip: 0,
    take: 200,
  });
  if (q.isLoading) {
    return <Loading />;
  }

  if (q.isError) {
    return <div>Error</div>;
  }

  const questions = q.data.game.questions;
  const ranks: (Rank & { userId: string })[] = q.data.ranks.map((p, idx) => ({
    name: p.username,
    points: p.points,
    position: idx + 1,
    userId: p.userId,
    questions: Object.keys(p.responses).length,
    correctQuestions: Object.entries(p.responses).filter(
      ([id, r]) => questions[id]?.correctOption === r.selectedOption,
    ).length,
  }));

  return (
    <div className="w-screen h-screen absolute inset-0 z-[100] flex justify-center p-10 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-md  space-y-4 overflow-hidden flex flex-col ">
        <RankList ranks={ranks} />
      </div>
    </div>
  );
}

function RankList(props: { ranks: Rank[] }) {
  return (
    <div className="rounded-lg bg-white shadow-lg ring-1 ring-pink-400 overflow-y-scroll h-full">
      {props.ranks.map((rank) => (
        <div
          key={rank.position}
          className="flex items-center justify-between px-4 py-4 sm:px-6"
        >
          <div className="flex flex-1 items-center">
            <div className="w-12 flex-shrink-0 text-center">
              <Position position={rank.position} />
            </div>
            <div className="min-w-0 text-lg flex-grow px-4 md:grid md:grid-cols-2 md:gap-4">
              <div className="text-pink-500">{rank.name}</div>
            </div>
            <div className="text-lg font-semibold text-pink-400">
              <span className="text-xl">
                {rank.correctQuestions} / {rank.questions}
              </span>
              <span className="text-xl pl-10">{rank.points}</span>{" "}
              <span className="font-thin">pt</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Position({
  position,
  color = "text-pink-400",
}: { position: number; color?: string }) {
  if (position === 1) {
    return <div className="x text-4xl font-bold">🥇</div>;
  }
  if (position === 2) {
    return <div className="text-4xl font-bold ">🥈</div>;
  }
  if (position === 3) {
    return <div className="text-4xl font-bold ">🥉</div>;
  }
  return <div className={clsx("text-2xl font-bold", color)}>{position}°</div>;
}
