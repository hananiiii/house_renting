import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home.jsx";
import Single_home from './pages/single_home';
import Join from './pages/join';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="App">
          <div className="pages">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Single_home/:id" element={<Single_home />} />
              <Route path="/Join" element={<Join />} />
            </Routes>
          </div>
        </div>
      </Router>
    </React.StrictMode>
  )
}

export default App;
