import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}> 
      <App />
    </StateProvider>
  </React.StrictMode>,
);



// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { StateProvider } from "./StateProvider";
// import reducer, { initialState } from "./reducer";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <StateProvider initialState={initialState} reducer={reducer}>
//     <App />
//   </StateProvider>
// );