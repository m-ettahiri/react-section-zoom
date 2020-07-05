import React, { useContext } from "react";
import {
  ZoomContext,
  zoomActions as actions,
} from "../../ZoomProvider/Zoom.store";
import "./NavBar.css";

function NavBar() {
  const { state, dispatch } = useContext(ZoomContext);
  return (
    <nav className={"navbar-container"}>
      <div>
        <button onClick={() => dispatch({ type: actions.ZOOM_IN })}>+</button>
        <button onClick={() => dispatch({ type: actions.ZOOM_OUT })}>-</button>
      </div>
      <div>
        {state.fullScreen.position ? (
          <button onClick={() => dispatch({ type: actions.INIT_SCREEN })}>
            {"<"}
          </button>
        ) : (
          <button onClick={() => dispatch({ type: actions.FULL_SCREEN })}>
            full sreen
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
