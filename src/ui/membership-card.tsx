import { BlogLogo } from "./logo";
import { UserAvatar } from "./user-icon";

export const MembershipCard = ({
  name,
  image,
  balance,
  id,
}: {
  name: string;
  image: string;
  balance: number;
  id: string;
}) => {
  return (
    <div className="relative h-60 w-96 overflow-hidden rounded-xl bg-gradient-to-tr from-indigo-500  via-purple-500 to-pink-500 p-4 text-pink-50 shadow-xl shadow-pink-100">
      <div className="absolute top-3 left-3 text-white">Socio 2023</div>
      <div className="absolute top-3 right-3 font-mono font-extralight uppercase text-purple-200">
        ****{id.slice(id.length - 8, id.length)}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <UserAvatar src={image} name={name} />
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>
      <BlogLogo className="absolute bottom-3 right-3 h-12 w-12 text-purple-200" />
      <div className="absolute left-3 bottom-3">
        <p className="font-thin text-purple-200">balance</p>
        <h3 className="font-bold text-purple-100">
          {balance.toLocaleString("it-IT", {})} FY
        </h3>
      </div>
    </div>
  );
};
