import { QRCode } from "react-qrcode-logo";
import { LogoFull } from "~/ui/logo";

export const GameQRCode = ({ url }: { url: string }) => {
  return (
    <div className="flex aspect-[11/18] w-96 flex-col items-center space-y-10 overflow-hidden  rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-4 text-pink-50 shadow-xl shadow-pink-100">
      <div>
        <div className="mt-4 rounded ring-2 ring-white">
          <QRCode
            size={300}
            value={url}
            logoWidth={50}
            fgColor="white"
            bgColor="transparent"
          />
        </div>
      </div>
      <LogoFull className="w-44" />
    </div>
  );
};
