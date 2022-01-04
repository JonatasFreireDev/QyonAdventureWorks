import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Styles from "./styles/global";
import Routes from "./routes";
import Menu from "./components/Menu";

import AppProvider from "./hooks";

import { lightTheme } from "./styles/lightTheme";

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Styles />
          <Menu />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
