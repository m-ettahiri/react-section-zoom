import React, { useRef, useEffect, useReducer } from "react";
import "./Zoom.css";
import {NavBar} from "./components";
import ZoomProvider from "./ZoomProvider/ZoomProvider";
import {
  zoomReducer,
  zoomStateInit,
  zoomActions,
} from "./ZoomProvider/Zoom.store";

function Zoom(props) {
  const zoomSectionRef = useRef(null);
  const elementToScaleRef = useRef(null);
  const [state, dispatch] = useReducer(zoomReducer, zoomStateInit);

  useEffect(() => {
    elementToScaleRef.current.style.transform = `scale(${state.scaleUnit})`;
  });

  useEffect(() => {
    if (!state.fullScreen.position) {
      elementToScaleRef.current.style.top = 50 + "px";
      elementToScaleRef.current.style.left = 50 + "px";
    }
  }, [state.fullScreen]);

  const handleMouseDown = (e) => {
    zoomSectionRef.current.style.cursor = "grab";
    dispatch({
      type: zoomActions.MOUSE_DOWN,
      payload: {
        elementLocation: {
          y: e.clientY - elementToScaleRef.current.offsetTop,
          x: e.clientX - elementToScaleRef.current.offsetLeft,
        },
      },
    });
  };

  const handleMouseUp = (e) => {
    zoomSectionRef.current.style.cursor = "default";
    dispatch({ type: zoomActions.MOUSE_UP });
  };

  const handleMouseMouve = (e) => {
    if (!state.startMove) return;
    elementToScaleRef.current.style.top =
      e.clientY - state.elementLocation.y + "px";
    elementToScaleRef.current.style.left =
      e.clientX - state.elementLocation.x + "px";
  };

  const handleMouseLeave = (e) => {
    dispatch({ type: zoomActions.MOUSE_LEAVE });
  };

  return (
    <ZoomProvider store={{ state, dispatch }}>
      <NavBar />
      <div
        className="zoom-section"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMouve}
        onMouseLeave={handleMouseLeave}
        ref={zoomSectionRef}
      >
        <div ref={elementToScaleRef} className="zoomed-section">
          {props.children}
        </div>
      </div>
    </ZoomProvider>
  );
}

export default Zoom;
