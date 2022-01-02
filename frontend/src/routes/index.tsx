import React from "react";

import { Routes as Switch, Route } from "react-router-dom";

import ErrorMessage from "../components/ErrorMessage";

import Home from "../pages/Home";
import Speedway from "../pages/Speedway";
import Competitors from "../pages/Competitors";
import History from "../pages/History";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/competitors" element={<Competitors />} />
      <Route path="/speedway" element={<Speedway />} />
      <Route path="/history" element={<History />} />
      <Route
        path="*"
        element={<ErrorMessage message="Está página não existe" />}
      />
    </Switch>
  );
};

export default Routes;
