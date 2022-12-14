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
    <nav className="overflow-x-hidden">
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
        <Institutional />
        <Contact />
        <Footer />
      </BrowserRouter>
    </nav>
  );
}

export default App;
