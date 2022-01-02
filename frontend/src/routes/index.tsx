import React from "react";

import { Routes as Switch, Route } from "react-router-dom";

import ErrorMessage from "../components/ErrorMessage";

import Home from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={<ErrorMessage message="Está página não existe" />}
      />
    </Switch>
  );
};

export default Routes;
