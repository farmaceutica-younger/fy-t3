import clsx from "clsx";
import { QuizGameParticipant } from "~/models/peapletrasure/types";
import { BlogLogo } from "~/ui/logo";
import { reactApi } from "~/utils/api";

export const Quiz = (props: QuizProps) => {
  const resp = reactApi.game.member.respondQuestion.useMutation();
  return (
    <div className="text-pink-50 max-w-md w-full">
      <div className="h-16 flex justify-between items-center">
        <BlogLogo className="h-10" />
        <button
          onClick={props.onClickProfile}
          type="button"
          className="btn btn-sm btn-ghost"
        >
          Profilo
        </button>
      </div>
      <Question question={props.question.question} />

      <div className="flex flex-col space-y-5 mt-10">
        {props.question.options.filter(Boolean).map((option, id) => (
          <Option
            option={option}
            key={option}
            selected={option === props.selectedOption}
            onClick={async () => {
              const res = await resp.mutateAsync({
                gameId: props.gameId,
                questionId: props.question.id,
                selectedOption: option,
              });
              props.onResponse(res);
            }}
          />
        ))}
      </div>
    </div>
  );
};

function Question({ question }: { question: string }) {
  return (
    <div className="flex justify-around text-justify py-3 max-h-60 overflow-y-scroll ring-2 ring-pink-100 rounded-md">
      <p className="text-center text-lg text-pink-50 px-1">{question}</p>
    </div>
  );
}

function Option({
  option,
  selected,
  onClick,
}: {
  option: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx("rounded-lg px-4 py-2 ring-2 ring-white", {
        "text-purple-800 bg-white": !selected,
        "bg-fuchsia-500 text-white": selected,
      })}
    >
      <p className={clsx("text-center text-xl")}>{option}</p>
    </button>
  );
}

interface QuizProps {
  gameId: string;
  question: Question;
  selectedOption?: string;
  onResponse: (p: QuizGameParticipant) => void;
  onClickProfile: () => void;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
}
