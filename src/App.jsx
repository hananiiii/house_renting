import './App.css'
import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home.jsx";
import Single_home from './pages/single_home'
import Join from './pages/join';
function App() {

  return (
    <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <div className="pages">
          <Routes>
            <Route path="/Home" element={<Home />} />
            
            <Route path="/Single_home/:id" element={<Single_home />} />
            <Route path="/Join" element={<Join />} />
            
           
           
           
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
  )
}

export default App
