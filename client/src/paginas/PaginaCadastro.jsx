import '../App.css';
import React from "react"
import {Link} from "react-router-dom"


function PaginaCadastro() {
  return (
    <div>
       <ul className="cadastro-links">
            <Link to="/paginausuario"><li>Registrar/Atualizar/Deletar Usuarios</li></Link>
            <Link to="/paginafunko"><li>Registrar/Atualizar/Deletar Funkos</li></Link>
        </ul>
    </div>
  );
}

export default PaginaCadastro;
