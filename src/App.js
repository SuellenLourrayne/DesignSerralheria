import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import FormPage from "./Formulario/FormPage";
import Sobre from "./Sobre/Sobre";

const App = () => {
  return (
    <><div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#gallery">Galeria</a></li>
            <li><a href="/formulario">Contato</a></li>
            <li><a href="/sobre">Sobre a Empresa</a></li>
          </ul>
        </nav>
        <h1>Design Serralheria</h1>
        <p>Transformando metal em arte!</p>
      </header>
    </div>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<FormPage />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router></>
  );
};

export default App;
