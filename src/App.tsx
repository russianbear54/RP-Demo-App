import React from "react";
import NavBar from "./components/Nav";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import ListsPage from "./pages/ListsPage";
import { Route, Routes,useLocation } from "react-router-dom";
import CountriesPage from "./pages/CountriesPage";
import { AnimatePresence } from "framer-motion";


const App: React.FC = () => {
 
  const location=useLocation()

  return (
    <>
      <NavBar />
      <AnimatePresence>  
      <Routes location={location} key={location.key} >
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/ships" element={<ListsPage />} />
        <Route path="/countries" element={<CountriesPage />} />
      </Routes></AnimatePresence>
    </>
  );
};

export default App;
