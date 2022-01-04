import React from "react";

import { ModalProvider } from "./ModalContext";

const AppProvider: React.FC = ({ children }) => (
  <ModalProvider>{children}</ModalProvider>
);

export default AppProvider;
