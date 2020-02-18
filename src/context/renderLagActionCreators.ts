import { SET_RENDER_LAG } from "./renderLagReducer";

import { RenderLagAction } from "./renderLagReducer.types";

export const setRenderLag: (
  renderLag: number
) => RenderLagAction = renderLag => ({
  type: SET_RENDER_LAG,
  renderLag
});
