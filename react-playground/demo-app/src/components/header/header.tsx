import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Home from "../../home/Home";

const NotFoundPage = () => <h1>404</h1>;

export default function Header(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="header-main">
        <nav>
          <NavLink className="app-heading" to="/">
            Home
          </NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
