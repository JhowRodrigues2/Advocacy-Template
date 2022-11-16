import { useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Institutional from "./Components/Institutional";
import Service from "./Components/Service";
import Team from "./Components/Team";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/servicos" element={<Service />} />
          <Route path="/institucional" element={<Institutional />} />
          <Route path="/equipe" element={<Team />} />
        </Routes>
        <Service />
        <Team />
      </BrowserRouter>
    </div>
  );
}

export default App;
