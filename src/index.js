import React from "react";
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Nav from "./components/Nav";
import App from "./App";
import About from "./pages/About";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    ></link>
    
    <HashRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
    
  </React.StrictMode>
);
