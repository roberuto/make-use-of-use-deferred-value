import { useContext } from "react";

import { RenderLagStateContext } from "context/RenderLagContext";
import { RenderLagStateContextType } from "context/RenderLagContext.types";

export const useRenderLagState: () => RenderLagStateContextType = () => {
  const context = useContext(RenderLagStateContext);

  if (context === undefined) {
    throw new Error(
      "useRenderLagState must be used within an RenderLagController"
    );
  }

  return context;
};
