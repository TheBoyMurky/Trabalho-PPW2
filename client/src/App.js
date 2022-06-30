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

function App() {
  
  // Colocar aqui as listas para os requisitos de GET
  // const [listOfUsers, setListOfUsers] = useState([]);
  // const [name, setName] = useState("")
  // const [age, setAge] = useState(0)
  // const [username, setUsername] = useState("")

  // useEffect ocorre cada vez que o usuário (re)carregar a página
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/getUsers").then((response) => {
  //     setListOfUsers(response.data)
  //   })
  // }, [])

  // const createUser = () => {
  //   Axios.post("http://localhost:3001/createUser", {
  //     name, 
  //     age, 
  //     username,
  //   }).then((response) => {
  //     setListOfUsers([...listOfUsers, {
  //       name, 
  //       age, 
  //       username,
  //     }])
  //     alert("USER CREATED");
  //   })
  // }

  return (
    <div className="App">
      <nav>
        <Link to="/"><h3>Logo</h3></Link>
        <ul className="nav-links">
            <Link to="/login"><li>Login</li></Link>
            <Link to="/cadastrousuario"><li>Registrar</li></Link>
            <Link to="/procurar"><li>Procurar por Funko</li></Link>
            <Link to="/cadastrofunko"><li>Cadastrar Funko - APENAS PARA LOGADO</li></Link>
        </ul>
    </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="cadastrousuario" element={<CadastroUsuario />} />
        <Route exact path="procurar" element={<ProcurarFunko />} />
        <Route exact path="cadastrofunko" element={<CadastroFunko />} />
      </Routes>
    </div>
  );
}

export default App;
