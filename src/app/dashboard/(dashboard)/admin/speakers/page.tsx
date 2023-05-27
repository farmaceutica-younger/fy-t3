import { BlogIcon } from "components/icon";

const SpeakerPage = () => {
  return (
    <div className="print:fixed print:inset-0 print:z-[10000000000] print:grid print:h-full print:w-full print:place-content-center print:bg-white print:p-2">
      <div className="flex flex-wrap gap-5">
        {speakers.map((s, idx) => (
          <SpeakerCard {...s} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default SpeakerPage;

const SpeakerCard = (speaker: Speaker) => {
  return (
    <div className="flex h-[54mm] w-[86mm] flex-col justify-evenly p-4 ring-1 ring-gray-100">
      <div className="flex items-center justify-center gap-4">
        <h3 className="text-2xl text-sky-500">Speaker</h3>
        <div className="flex items-center text-sky-400">
          <BlogIcon className="h-10 w-10" />
          <div className="ml-3 flex flex-col text-xs">
            <span className="font-bold">Farmaceutica</span> <span>
              Younger
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="text-center text-3xl font-bold text-lime-500">
        {speaker.name}
      </div>
      <div className="text-center text-2xl text-sky-400">{speaker.label}</div>
    </div>
  );
};

const speakers: Speaker[] = [
  {
    name: "Chiara Sertorelli",
    label: "Social Media Strategist",
  },
  {
    name: "Ivana Forbiti",
    label: "Convalide",
  },
  {
    name: "Maria Paravani",
    label: "Y2I - ISPE Italia",
  },
  {
    name: "Lorenzo Cottini",
    label: "AFI",
  },
  {
    name: "Manuel Edris",
    label: "Talent Acquisition",
  },
  {
    name: "Elisa Fabiani",
    label: "Talent Acquisition",
  },
];

interface Speaker {
  name: string;
  label: string;
}
