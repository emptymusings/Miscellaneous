import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
import Home from "./home/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/header/header";

const theme = createTheme({
  
});

export default function App() {
  return (
    <div>
      <Header />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <nav>
            <NavLink to="/">
              Home
            </NavLink>
          </nav>
          <Routes>
            
            <Route path="" element={<Home />} />         
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

const NotFoundPage = () => <h1>404</h1>;
