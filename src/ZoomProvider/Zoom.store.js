import React from "react";
import zoomActions from "../ZoomProvider/Zoom.actions";
const ZoomContext = React.createContext();

const zoomStateInit = {
  scaleUnit: 1,
  isMouseDown: false,
  startMove: false,
  elementLocation: {},
  fullScreen:  {}
};

const zoomReducer = (state, action) => {
  switch (action.type) {
    case zoomActions.ZOOM_IN:
      if (state.scaleUnit >= 5) return state;
      return { ...state, scaleUnit: state.scaleUnit + 0.5 };

    case zoomActions.ZOOM_OUT:
      if (state.scaleUnit < 1.5) return state;
      return { ...state, scaleUnit: state.scaleUnit - 0.5 };

    case zoomActions.MOUSE_DOWN:
      return {
        ...state,
        isMouseDown: true,
        startMove: true,
        elementLocation: action.payload.elementLocation,
      };

    case zoomActions.MOUSE_UP:
      return {
        ...state,
        isMouseDown: false,
        startMove: false,
      };

    case zoomActions.MOUSE_LEAVE:
      return {
        ...state,
        startMove: false,
      };

    case zoomActions.FULL_SCREEN:
        console.log('okk')
      return {
        ...state,
        fullScreen: {
          position: "fixed",
          width: "100%",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex:'10000'
        },
      };
    case zoomActions.INIT_SCREEN:
        return {
            ...state,
            fullScreen:{}
        }
    default:
      throw { message: "action error", action: action };
  }
};

export { ZoomContext, zoomReducer, zoomStateInit, zoomActions };
