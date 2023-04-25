import { format } from "date-fns";
import { Dialog } from "@headlessui/react";
import { DatePickerField } from "~/forms/fields/date-picker";
import { NumberInputField } from "~/forms/fields/number-field";
import { z } from "zod";
import { reactApi } from "~/utils/api";
import { Loading } from "~/ui/loading";
import { useCloseDialog, useOpenDialog } from "~/hooks/dialog/dialog";
import { ZodForm } from "~/forms/zod-form";
import { TextField } from "~/forms/fields/text-field";
import { SelectField } from "~/forms/fields/select-field";

export const MemberPayments = ({ memberId }: { memberId: string }) => {
  const openDialog = useOpenDialog();

  const q = reactApi.association.admin.getMemberPayments.useQuery({ memberId });
  if (q.isLoading) {
    return <Loading />;
  }

  if (q.isError) {
    return <p>error</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-compact table w-full">
        <thead>
          <tr>
            <th>Data</th>
            <th>Valore</th>
            <th>Metodo</th>
            <th className="flex justify-end">
              <button
                onClick={() => openDialog(<DialogPanel memberId={memberId} />)}
              >
                registra pagamento
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {q.data.payments.map((p) => (
            <tr key={p.id}>
              <th>{format(p.createdAt, "yyyy-MM-dd")}</th>
              <td>{p.amount / 100}€</td>
              <td>{p.method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const RegisterPaymentSchema = z.object({
  amount: z.number(),
  method: z.string(),
  note: z.string(),
  date: z.date().default(new Date()),
});

const DialogPanel = ({ memberId }: { memberId: string }) => {
  const closeDialog = useCloseDialog();
  const utils = reactApi.useContext();
  const registerMut =
    reactApi.association.admin.registerMemberPayment.useMutation({
      onSuccess: () => {
        utils.association.admin.getMemberPayments.invalidate();
        closeDialog();
      },
    });

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Registra Pagamento
      </Dialog.Title>
      <ZodForm
        schema={RegisterPaymentSchema}
        initialValues={{
          amount: 2000,
          method: "cash",
        }}
        onSubmit={async (value) => {
          const res = await registerMut.mutateAsync({ ...value, memberId });
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="mt-10 space-y-10">
            <SelectField
              label="Metodo di Pagamento"
              name="method"
              options={[
                { label: "Bonifico", value: "bank-transfer" },
                { label: "PayPal", value: "paypal" },
                { label: "Stripe", value: "stripe" },
                { label: "Cash", value: "cash" },
                { label: "Gratuito", value: "free" },
              ]}
            />
            <DatePickerField name="date" label="data" />
            <NumberInputField label="Costo in euro" name="amount" />
            <TextField label="Note" name="note" numRows={3} />
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={closeDialog}
              >
                Salva
              </button>
            </div>
          </form>
        )}
      </ZodForm>
    </>
  );
};
