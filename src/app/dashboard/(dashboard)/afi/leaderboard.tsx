interface LeaderBoardProps {
  ranks: Rank[];
  yourRank?: Rank;
}

export interface Rank {
  image: string;
  name: string;
  points: number;
  position: number;
}

export const LeaderBaord = (props: LeaderBoardProps) => {
  return (
    <div className="max-w-md rounded-lg bg-white shadow-lg ring-1 ring-pink-400">
      {props.yourRank && <MyRank rank={props.yourRank} />}
      {props.ranks.map((rank) => (
        <div
          key={rank.position}
          className="flex items-center justify-between px-4 py-4 sm:px-6"
        >
          <div className="flex flex-1 items-center">
            <div className="w-12 flex-shrink-0 text-center">
              <Position position={rank.position} />
            </div>
            <div className="ml-4 flex-shrink-0">
              <img className="h-12 w-12 rounded-full" src={rank.image} alt="" />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div className="text-lg text-gray-400">{rank.name}</div>
            </div>
            <div className="flex-grow"></div>
            <div className="text-lg font-semibold text-pink-400">
              <span className="text-xl">{rank.points}</span>{" "}
              <span className="font-thin">pt</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

function MyRank({ rank }: { rank: Rank }) {
  return (
    <div className="m-4 flex justify-around rounded-2xl bg-gradient-to-tr from-pink-400 via-pink-400 to-pink-500 py-3 shadow-xl">
      <div className="flex w-1/3 flex-col items-center justify-center text-white">
        <span className="font-sans text-sm uppercase text-pink-100">
          Posizione
        </span>
        <span className="mt-1 text-2xl font-bold text-pink-100">
          {rank.position}
        </span>
      </div>
      <div className="flex w-1/3 flex-col items-center justify-center text-pink-200">
        <img
          className="h-14 w-14 rounded-full ring-1 ring-white"
          src={rank.image}
          alt=""
        />
        <span className="mt-2">{rank.name}</span>
      </div>
      <div className="flex w-1/3 flex-col items-center justify-center text-white">
        <span className="font-sans text-sm uppercase text-pink-100">Punti</span>
        <span className="mt-1 text-2xl font-bold text-pink-100">
          {rank.points}
        </span>
      </div>
    </div>
  );
}

function Position({ position }: { position: number }) {
  if (position === 1) {
    return <div className="x text-4xl font-bold">🥇</div>;
  }
  if (position === 2) {
    return <div className="text-4xl font-bold ">🥈</div>;
  }
  if (position === 3) {
    return <div className="text-4xl font-bold ">🥉</div>;
  }
  return <div className="text-2xl font-bold text-pink-400">{position}</div>;
}
