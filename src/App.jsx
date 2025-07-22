import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Box from "@mui/material/Box";
import PrimarySearchAppBar from "./features/Dashboard/components/PrimarySearchAppBar";
import PermanentDrawerLeft from "./features/Dashboard/components/PermanentDrawerLeft";
import DashboardLayout from "./features/Dashboard/components/DashboardLayout";
import customTheme from "./config/theme";
import { ThemeProvider } from "@mui/material/styles";
import CardsView from "./components/Cards/CardsView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={customTheme}>
      <DashboardLayout>
       <CardsView/>
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default App;
