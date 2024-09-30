import { ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  children: ReactNode;
};

export default function InfoBox({ mode, children }: InfoBoxProps) {
  return (
    <div>
      {mode === "hint" ? (
        <p>{children}</p>
      ) : (
        <>
          <h1>Warning</h1>
          <p>{children}</p>
        </>
      )}
    </div>
  );
}
