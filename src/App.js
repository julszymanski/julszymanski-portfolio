import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';
import MyProjects from './components/MyProjects';
import Home from './components/Home';

// This is a React Router v6 app
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/contactme' element={<ContactForm/>}/>
          <Route path='/myprojects' element={<MyProjects/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

