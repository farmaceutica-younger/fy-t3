import * as React from "react";

const comments = [
  {
    name: "Roberto",
    comment:
      "Ho scelto di entrare in farmaceutica Younger per Far parte di un idea ambiziosa 💪🏻",
  },
  {
    name: "Roberta",
    comment:
      "Ho scelto di far parte di FY per aumentare il mio network farmaceutico",
  },
  {
    name: "Alessandro",
    comment:
      "Ho deciso di diventare socio in quanto vedo in Farmaceutica Younger una imperdibile opportunità per venire a contatto con altri giovani che, come me, stanno muovendo i  primi passi nel mondo farmaceutico. Credo che da questa associazione possano solo nascere confronti positivi e interessanti, dato che sono convinto che ognuno abbia da raccontare e condividere qualcosa di unico circa la propria esperienza universitaria e lavorativa in ambito Pharma!",
  },
  {
    name: "Maurizio",
    comment:
      "Ho scelto di aderire al progetto di farmaceutica younger poichè credo fortemente nella qualità e nella caratura dei temi trattati che offrono formazione non solo ai neolaureati ma anche alle figure più senior. Ritengo che tale progetto debba essere sostenuto non solo dagli Atenei ma dalle aziende stesse",
  },
  {
    name: "Stefania",
    comment:
      "Farmaceutica younger per me rappresenta innovatività, concretezza e professionalità, tre valori che non è facile trovare nel mondo lavorativo oggi. Ho scelto di associarmi innanzitutto perché credo fortemente nei principi fondanti ma anche perché il confronto con altre giovani menti del mondo farma è per me un’importante occasione di confronto e crescita.",
  },
];

export const Comments = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          {" "}
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-pink-600 sm:text-4xl">
              Cosa dicono i nostri soci?
            </h2>
            <p className="text-xl leading-7 text-gray-500">
              Abbiamo chiesto ai nostri giovani soci di raccontarci del perchè
              hanno deciso di entrare nella famiglia di Farmaceutica Younger!
            </p>
          </div>
          <div className="-my-8 flex overflow-x-scroll">
            <ul className="flex w-full items-center py-8">
              {comments.map((c, idx) => {
                return (
                  <li key={idx} className="flex-none px-3 text-left md:px-4">
                    <figure className="max-w-xs flex-none transform rounded-xl shadow-lg transition-all hover:-rotate-3 md:max-w-md">
                      <blockquote className="rounded-t-xl bg-white px-6 py-8 text-base font-semibold text-gray-700 md:p-10">
                        <svg
                          width="45"
                          height="36"
                          className="mb-5 fill-current text-indigo-100"
                        >
                          <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                        </svg>
                        <p>{c.comment}</p>
                      </blockquote>
                      <figcaption className="flex items-center space-x-4 rounded-b-xl bg-gradient-to-br from-indigo-400 to-indigo-800 p-6 font-semibold leading-6 text-white md:px-10 md:py-6">
                        <div className="flex-auto">{c.name}</div>
                        <cite className="flex">
                          <span className="sr-only">Original tweet by</span>
                        </cite>
                      </figcaption>
                    </figure>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
