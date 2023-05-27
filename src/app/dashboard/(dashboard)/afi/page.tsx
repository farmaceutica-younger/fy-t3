"use client";
import { useState } from "react";
import { LeaderBaord, Rank } from "./leaderboard";
import { GameQRCode } from "./qrcode";
import { QuizQuestion, type Question } from "./question";

export default function AfiPage() {
  const [selected, setSelected] = useState<string | undefined>();
  return (
    <div className="flex space-x-10 p-10">
      <GameQRCode url="https://www.farmaceuticayounger.science" />
      <LeaderBaord ranks={ranks} yourRank={ranks[3]} />
      <QuizQuestion
        question={question}
        selectedAnswerId={selected}
        selectAnswer={setSelected}
      />
    </div>
  );
}

const question: Question = {
  id: "1",
  question:
    "🎂 Quante candeline spegne quest'anno lo Stabilimento Chimico Farmaceutico Militare di Firenze?",
  answers: [
    { answer: "150", id: "1" },
    { answer: "170", id: "2" },
    { answer: "175", id: "3" },
  ],
};

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
    points: 80,
    position: 2,
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    name: "Francesco",
    points: 60,
    position: 3,
  },
  {
    image: "https://i.pravatar.cc/300?img=4",
    name: "Sara",
    points: 30,
    position: 4,
  },
  {
    image: "https://i.pravatar.cc/300?img=5",
    name: "Carmen",
    points: 10,
    position: 5,
  },
];
