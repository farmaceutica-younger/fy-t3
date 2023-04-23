import { FC, ReactNode } from "react";

export const DashboardContainer: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <main className="w-full overflow-x-scroll">
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">{children}</div>
      </div>
    </main>
  );
};
