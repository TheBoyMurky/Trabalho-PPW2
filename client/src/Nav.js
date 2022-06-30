import React from "react"
import './App.css';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
        <Link to="/"><h3>Logo</h3></Link>
        <ul className="nav-links">
            <Link to="/login"><li>Login</li></Link>
            <Link to="/cadastrousuario"><li>Registrar</li></Link>
            <Link to="/procurar"><li>Procurar por Funko</li></Link>
            <Link to="/cadastrofunko"><li>Cadastrar Funko - APENAS PARA LOGADO</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;
