// src/Home/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // Use useNavigate para navegação programática

  const handleButtonClick = () => {
    navigate("/formulario"); // Redireciona para a página de formulário
  };
  return (
    <div className="App">

      <section id="contact" className="cta">
        <h2>Precisa de um orçamento?</h2>
        <p>Preencha o formulário e entraremos em contato!</p>
        <button onClick={handleButtonClick}>Solicitar Orçamento</button>
      </section>

      <section id="gallery" className="gallery">
        <h2>Nossos Trabalhos</h2>
        <div className="photos">
          <img src="/images/trabalho1.jpg" alt="Trabalho 1" />
          <img src="/images/trabalho2.jpg" alt="Trabalho 2" />
          <img src="/images/trabalho3.jpg" alt="Trabalho 3" />
          <img src="/images/trabalho4.jpg" alt="Trabalho 4" />
          <img src="/images/trabalho5.jpg" alt="Trabalho 5" />
          <img src="/images/trabalho6.jpg" alt="Trabalho 6" />
        </div>
      </section>

    </div>
  );
};

export default Home;
