import { createContext } from "react";

import {
  RenderLagStateContextType,
  RenderLagDispatchContextType
} from "./RenderLagContext.types";

export const RenderLagStateContext = createContext<
  RenderLagStateContextType | undefined
>(undefined);

export const RenderLagDispatchContext = createContext<
  RenderLagDispatchContextType | undefined
>(undefined);
