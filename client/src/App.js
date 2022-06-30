import './App.css';
import React from "react"
import {Route, Routes, Link} from 'react-router-dom'
// import {useState, useEffect} from "react";
// import Axios from "axios";

//Importando outras páginas
import Home from './paginas/Home';
import Login from './paginas/Login';
import CadastroUsuario from './paginas/CadastroUsuario';
import CadastroFunko from './paginas/CadastroFunko';
import ProcurarFunko from './paginas/ProcurarFunko';
import PaginaCadastro from './paginas/PaginaCadastro';

function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/"><h3>Logo</h3></Link>
        <ul className="nav-links">
            <Link to="/login"><li>Login</li></Link>
            <Link to="/procurar"><li>Procurar por Funko</li></Link>
        </ul>
    </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="procurar" element={<ProcurarFunko />} />
        <Route exact path="cadastrousuario" element={<CadastroUsuario />} />
        <Route exact path="cadastrofunko" element={<CadastroFunko />} />
        <Route exact path="paginacadastro" element={<PaginaCadastro />} />
      </Routes>
    </div>
  );
}

export default App;
