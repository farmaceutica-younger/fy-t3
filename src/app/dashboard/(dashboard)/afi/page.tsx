"use client";
import { LeaderBaord, Rank } from "./leaderboard";
import { AfiQRcode } from "./qrcode";

export default function AfiPage() {
  return (
    <div className="flex space-x-10 p-10">
      <AfiQRcode url="https://www.farmaceuticayounger.science" />
      <LeaderBaord ranks={ranks} yourRank={ranks[3]} />
    </div>
  );
}

// create fake ranks data
const ranks: Rank[] = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    name: "Ludovico",
    points: 100,
    position: 1,
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    name: "Alex",
    points: 100,
    position: 2,
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    name: "Francesco",
    points: 100,
    position: 3,
  },
  {
    image: "https://i.pravatar.cc/300?img=4",
    name: "Sara",
    points: 100,
    position: 4,
  },
  {
    image: "https://i.pravatar.cc/300?img=4",
    name: "Carmen",
    points: 100,
    position: 5,
  },
];
