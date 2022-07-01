import '../App.css';
import React, { useState } from "react"
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState("")
  const [senha, setSenha] = useState("")

  const url = "http://localhost:3001/"
  
  async function validarUser(event) {
    event.preventDefault();
    const userVerify = {
      username: user,
      senha: senha
    }

    
    let requisicao = Axios.post(url + "validarUser", userVerify)
    requisicao.then((resposta) => {
      if(resposta.status === 200){
        if (user === "admin") {
          navigate("/paginacadastro")
        } else {
          navigate("/paginafunko")
        }
      }   
    })
  }

  const handleUser = event => {
    setUser(event.target.value)
    // console.log(user)
  }

  const handlePassword = event => {
    setSenha(event.target.value)
    // console.log(senha)
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={validarUser}>
        <input type='text' id="user" onChange={handleUser} value={user} /><br/>
        <input type='password' id="senha" onChange={handlePassword} value={senha} /><br/>
        <input type="submit" value="Entrar" name="" id="" />
      </form>
    </div>
  );
}

export default Login;