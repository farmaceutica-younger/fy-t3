"use client";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { EventQuestionairreForm } from "~/components/questionairre/event-form";
import { QuestionairreBuilder } from "~/components/questionairre/form-builder";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { reactApi } from "~/utils/api";

const QuestionairePage = () => {
  const q = reactApi.association.getQuestionairre.useQuery();
  const router = useRouter();

  const { mutateAsync: setQuestionairre } =
    reactApi.association.admin.updateQuestionairre.useMutation();

  const [showPreview, setShowPreview] = useState(false);

  if (q.isLoading) {
    return <p>Loading .... </p>;
  }

  if (q.error) {
    return "error";
  }

  return (
    <>
      <div className="">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-xl ">
            Gestisci Questionario dell&apos;associazione
          </h2>
          <div>
            <button onClick={() => router.back()} className="btn-ghost btn">
              Indietro
            </button>
            <button
              onClick={() => setShowPreview(true)}
              className="btn-outline btn-primary btn"
            >
              {" "}
              Preview
            </button>
          </div>
        </div>

        <div className="m-auto mt-10 w-full">
          <QuestionairreBuilder
            questionairre={q.data}
            onSave={async (value) => {
              const id = toast("Salvataggio", {
                isLoading: true,
                autoClose: false,
                position: "bottom-right",
              });
              await setQuestionairre({
                questionairre: value,
              });
              await q.refetch();

              toast.update(id, {
                type: toast.TYPE.SUCCESS,
                isLoading: false,
                autoClose: 5000,
                render: () => "Questionario Salvato!",
              });
            }}
          />
        </div>
      </div>

      <Dialog
        open={showPreview}
        onClose={() => setShowPreview(false)}
        className="fixed inset-0 z-50 overflow-y-auto "
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="fixed inset-28 overflow-auto rounded bg-white p-10 shadow-xl ring-1">
          <button
            onClick={() => setShowPreview(false)}
            className="absolute right-4 top-4 grid h-10 w-10 place-content-center rounded-full hover:bg-slate-200"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <EventQuestionairreForm
            title="Registrati all'associazione"
            questionairre={q.data}
            onSumbit={async () => {}}
            submitText="Completa la registrazione"
          />
        </div>
      </Dialog>
    </>
  );
};

export default QuestionairePage;
