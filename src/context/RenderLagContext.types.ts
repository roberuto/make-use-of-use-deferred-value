import { Dispatch } from "react";
import { RenderLagAction } from "./renderLagReducer.types";

export type RenderLagStateContextType = {
  renderLag?: number;
};

export type RenderLagDispatchContextType = Dispatch<RenderLagAction>;
