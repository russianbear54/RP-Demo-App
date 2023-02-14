import React, { useRef } from "react";
import NavBar from "./components/Nav";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import ListsPage from "./pages/ListsPage";
import { Route, Routes, useLocation } from "react-router-dom";
import CountriesPage from "./pages/CountriesPage";
import { AnimatePresence } from "framer-motion";
import { Window } from "../src/styles/stylesSC";

const App: React.FC = () => {
  const location = useLocation();
  const pageRef = useRef(null);

  return (
    <>
      <Window ref={pageRef}>
        <NavBar />
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<HomePage pageRef={pageRef} />} />
            <Route path="/home" element={<HomePage pageRef={pageRef} />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/ships" element={<ListsPage />} />
            <Route path="/countries" element={<CountriesPage />} />
          </Routes>
        </AnimatePresence>
      </Window>
    </>
  );
};

export default App;
