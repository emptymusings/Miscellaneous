import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink
} from "react-router-dom";

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
          <Route path="" element={<HomePage />} />         
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const HomePage = () => <h1>Home page</h1>;
const NotFoundPage = () => <h1>404</h1>;
