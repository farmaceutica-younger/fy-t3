import {
  type QuizGame,
  type QuizGameParticipant,
  type Question,
} from "~/models/peapletrasure/types";

export function UserProfile(props: Props) {
  const questions = props.game.questions;
  const responsesIds = Object.keys(props.participant.responses);
  // rome-ignore lint/style/noNonNullAssertion: <explanation>
  const responses = responsesIds.map((id) => questions[id]!).filter(Boolean);
  const totalResponses = responses.length;
  const totalQuestions = Object.keys(questions).length;

  return (
    <div className="text-white text-center max-w-md">
      <div className="text-left text-lg  text-white mt-4">
        <h2 className="font-bold text-2xl">{props.game.name}</h2>
        <p>Ciao {props.participant.username},</p>

        <Stats total={totalQuestions} totalMeet={totalResponses} />
        <div className="mt-4" />
      </div>

      {responses.length > 0 && (
        <>
          <p>Ecco la lista delle persone che hai conosciuto!</p>
          <Persons questions={responses} />
        </>
      )}

      <div className="bg-orange-700 text-orange-100 ring-orange-800 ring-1 rounded p-2">
        Ricorda che per scoprire la tua posizione in classifica dovrai
        partecipare alla sessione giovani che si terrà l'8 Giugno dalle 16:45
        alle 18:30! Al termine della sessione annunceremo i vincitori che si
        aggiundicheranno i fantastici premi in gara!
      </div>
    </div>
  );
}

interface Props {
  participant: QuizGameParticipant;
  game: QuizGame;
}

function Stats({ total, totalMeet }: { totalMeet: number; total: number }) {
  return (
    <div className="bg-pink-50 rounded mt-4 shadow-lg py-2 text-pink-500">
      <h3 className="text-center text-pink-400 text-xl font-semibold">
        Hai incontrato
      </h3>
      <div className="flex w-full justify-stretch space-x-4 my-2 items-center">
        <div className="flex-1 ring-white rounded font-bold text-right">
          <span className="text-4xl font-bold text-pink-400 ">{totalMeet}</span>
        </div>
        <div> {totalMeet === 1 ? "persona" : "persone"} su </div>
        <div className="flex-1 ring-white rounded font-bold  text-2xl text-left">
          <span className="text-4xl font-bold text-pink-400">{total}</span>
        </div>
      </div>
    </div>
  );
}

function Persons({ questions }: { questions: Question[] }) {
  return (
    <div className="ring-1 ring-pink-200 shadow-md my-4 px-4 py-2 rounded">
      <table className="w-full text-lg">
        {questions.map((r) => (
          <tr>
            <td className="text-left">{r.personName}</td>
            <td className="text-right">
              {r.personLinkedin && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="link italic"
                  href={r.personLinkedin}
                >
                  linkedin
                </a>
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
