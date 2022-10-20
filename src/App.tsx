import React from 'react';
import './App.css';
import NavBar from './components/nav/NavBar';
 import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import ListsPage from './pages/ListsPage';
import { Route, Routes } from 'react-router-dom';


const App:React.FC=()=> {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/form" element={<FormPage/>}/>
        <Route path="/lists" element={<ListsPage/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
