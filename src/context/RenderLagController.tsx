import React, { useReducer } from "react";
import {
  RenderLagStateContext,
  RenderLagDispatchContext
} from "./RenderLagContext";
import { renderLagReducer } from "./renderLagReducer";

export const RenderLagContextController: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(renderLagReducer, {
    renderLag: 1
  });

  return (
    <RenderLagStateContext.Provider value={state}>
      <RenderLagDispatchContext.Provider value={dispatch}>
        {children}
      </RenderLagDispatchContext.Provider>
    </RenderLagStateContext.Provider>
  );
};
