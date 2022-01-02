import React from "react";

import { BrowserRouter } from "react-router-dom";
import Styles from "./styles/global";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Styles />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
