import { Dialog, Transition } from "@headlessui/react";
import { Fragment, type ReactNode } from "react";
import { create } from "zustand";
import { createStore } from "zustand/vanilla";

export const DialogContainer = () => {
  const { dialog, closeDialog, isOpen: open } = useDialogStore();

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDialog}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-fit transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {dialog}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

type DialogState = {
  dialog: ReactNode | null;
  isOpen: boolean;
  openDialog: (dialog: ReactNode) => void;
  closeDialog: () => void;
};

const store = createStore<DialogState>((set) => {
  return {
    dialog: null,
    isOpen: false,
    closeDialog: () => set({ isOpen: false }),
    openDialog: (dialog) => set({ dialog, isOpen: true }),
  };
});

const useDialogStore = create(store);

export const useOpenDialog = () => {
  return useDialogStore((s) => s.openDialog);
};

export const useCloseDialog = () => {
  return useDialogStore((s) => s.closeDialog);
};

export const { openDialog, closeDialog } = store.getState();
