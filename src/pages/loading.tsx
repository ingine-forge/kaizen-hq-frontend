import { CSSProperties } from "react";
import { RingLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Loading = () => {
  return (
    <div className="h-dvh flex justify-center items-center">
      <div className="flex gap-8 flex-col items-center">
        <RingLoader
          color={"#ffffff"}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p className="text-2xl uppercase animate-pulse">Loading...</p>
      </div>
    </div>
  );
};
