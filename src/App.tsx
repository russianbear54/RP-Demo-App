import React from 'react';
// import { Form } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
 import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <HomePage /> */}
      <FormPage/>
    </div>
  );
}

export default App;
