import { useContext } from "react";

import { RenderLagDispatchContext } from "context/RenderLagContext";
import { RenderLagDispatchContextType } from "context/RenderLagContext.types";

export const useRenderLagDispatch: () => RenderLagDispatchContextType = () => {
  const context = useContext(RenderLagDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useRenderLagDispatch must be used within an RenderLagController"
    );
  }

  return context;
};
