import { RenderLagAction } from "./renderLagReducer.types";
import { RenderLagStateContextType } from "./RenderLagContext.types";

export const SET_RENDER_LAG = "renderLag/SET_RENDER_LAG";

export const renderLagReducer: (
  state: RenderLagStateContextType,
  action: RenderLagAction
) => RenderLagStateContextType = (state, action) => {
  switch (action.type) {
    case SET_RENDER_LAG: {
      return { ...state, renderLag: action.renderLag };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
