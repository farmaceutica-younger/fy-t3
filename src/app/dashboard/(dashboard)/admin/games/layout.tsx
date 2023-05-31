import { ReactNode } from "react";

export default function LayoutPage({ children }: { children: ReactNode }) {
  return <div className="h-full min-h-full w-full bg-white">{children}</div>;
}
