import React, { useReducer, useMemo } from "react";
import "./ZoomProvider.css";
import { ZoomContext } from "./Zoom.store";

function ZoomProvider({ children, store }) {
  const zoomStore = useMemo(() => store, [store]);
  return (
    <ZoomContext.Provider value={zoomStore}>
      <section className="zoom-container" style={store.state.fullScreen}>
        {children}
      </section>
    </ZoomContext.Provider>
  );
}

export default ZoomProvider;
