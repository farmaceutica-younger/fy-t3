import clsx from "clsx";
import { LogoFull } from "~/ui/logo";

interface LeaderBoardProps {
  question: Question;
  selectedAnswerId?: string;
  selectAnswer: (id: string) => void;
}

interface Answer {
  id: string;
  answer: string;
}

export interface Question {
  id: string;
  question: string;
  answers: Answer[];
}

export const QuizQuestion = (props: LeaderBoardProps) => {
  return (
    <div className="flex max-w-md flex-col items-stretch rounded-lg bg-white bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-4 text-pink-50 shadow-lg  ring-1 ring-pink-400">
      <Question question={props.question.question} />

      <div className="flex flex-col space-y-5 p-4">
        {props.question.answers.map((answer, id) => (
          <Answer
            answer={answer.answer}
            key={id}
            selected={answer.id === props.selectedAnswerId}
            onClick={() => props.selectAnswer(answer.id)}
          />
        ))}
      </div>
      <div className="flex flex-grow justify-center">
        <LogoFull className="w-44" />
      </div>
    </div>
  );
};

function Question({ question }: { question: string }) {
  return (
    <div className="m-4 flex justify-around px-4 py-3 ">
      <p className="text-center text-2xl text-pink-50">{question}</p>
    </div>
  );
}

function Answer({
  answer,
  selected,
  onClick,
}: {
  answer: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx("rounded-lg bg-white px-4 py-2  ring-2 ring-white", {
        "text-purple-800": !selected,
        "bg-fuchsia-500 text-white": selected,
      })}
    >
      <p className={clsx("text-center text-xl")}>{answer}</p>
    </button>
  );
}
