import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainStack from "./navigation/MainStack";

function App() {
  return (
    <BrowserRouter>
      <MainStack />
    </BrowserRouter>
  );
}

export default App;
