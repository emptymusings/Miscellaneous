import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink
} from "react-router-dom";
import Home from "./home/Home";

export default function App() {
  return (
    <div>
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
    </div>
  );
}

const NotFoundPage = () => <h1>404</h1>;
