import React from 'react';
import './App.css';
import NavBar from './components/nav/NavBar';
 import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import ListsPage from './pages/ListsPage';
import { Route, Routes } from 'react-router-dom';
import CountriesPage from './pages/CountriesPage';


const App:React.FC=()=> {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/form" element={<FormPage/>}/>
        <Route path="/ships" element={<ListsPage/>}/>
        <Route path="/countries" element={<CountriesPage/>}/>

      </Routes>
      
      
      
    </div>
  );
}

export default App;
