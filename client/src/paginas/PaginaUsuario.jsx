import '../App.css';
import React, { useState, useEffect } from "react"
import Axios from 'axios'

function PaginaUsuario() {
  const [userCriar, setUserCriar] = useState("")
  const [senhaCriar, setSenhaCriar] = useState("")
  const [userAlterar, setUserAlterar] = useState("")
  const [senhaAlterar, setSenhaAlterar] = useState("")
  const [userDeletar, setUserDeletar] = useState("")
  let [ users, setUsers ] = useState([{}]) 

  const url = "http://localhost:3001/"

  async function criarUser(event) {
    event.preventDefault();
    const userToCreate = {
      username: userCriar,
      senha: senhaCriar
    }
    
    console.log(Axios.post(url + "createUser", userToCreate))
  }
  
  async function alterarUser(event) {
    event.preventDefault();
    const userToAlter = {
      username: userAlterar,
      senha: senhaAlterar
    }
    
    console.log(Axios.put(url + "updateUserPassword", userToAlter))
  }

  async function deletarUser(event) {
    event.preventDefault();
    const userToDelete = {
      username: userDeletar
    }
    if (userToDelete.user === "admin") {
      console.log("Não é possível deletar esse usuário")
    } else {
      Axios.post(url + "deleteUser", userToDelete)
    }
  }

  const handleUserCriar = event => {
    setUserCriar(event.target.value)
    console.log(userCriar)
  }

  const handlePasswordCriar = event => {
    setSenhaCriar(event.target.value)
    console.log(senhaCriar)
  }

  const handleUserAlterar = event => {
    setUserAlterar(event.target.value)
    console.log(userAlterar)
  }

  const handlePasswordAlterar = event => {
    setSenhaAlterar(event.target.value)
    console.log(senhaAlterar)
  }

  const handleUserDeletar = event => {
    setUserDeletar(event.target.value)
    console.log(userDeletar)
  }

  

    useEffect(() => {
        findAllUsers()
    })

    function findAllUsers(){
        let requisicao = Axios.get(url+"getUsers");
        requisicao.then((resposta) => {
            setUsers(resposta.data)
            console.log(users)
        })
    }

  return (
    <div>
      <h1>Criar Usuario</h1>
      <form onSubmit={criarUser}>
        <label>Username: <input type='text' id="userCriar" onChange={handleUserCriar} value={userCriar} /></label><br/>
        <label>Senha: <input type='password' id="senhaCriar" onChange={handlePasswordCriar} value={senhaCriar} /></label><br/>
        <input type="submit" value="Entrar" name="" id="" />
      </form>
      <hr/>
      <h1>Alterar Senha</h1>
      <form onSubmit={alterarUser}>
      <label>Username: <input type='text' id="userAlterar" onChange={handleUserAlterar} value={userAlterar} /></label><br/>
        <label>Senha: <input type='password' id="senhaAlterar" onChange={handlePasswordAlterar} value={senhaAlterar} /></label><br/>
        <input type="submit" value="Entrar" name="" id="" />
      </form>
      <hr/>
      <h1>Deletar User</h1>
      <form onSubmit={deletarUser}>
      <label>Username: <input type='text' id="userDeletar" onChange={handleUserDeletar} value={userDeletar} /></label><br/>
        <input type="submit" value="Entrar" name="" id="" />
      </form>
      <hr/>
      <h1>Lista Users</h1>
      {users.map(user => (
        <div className='user'>
            <p>Username - {user.username}</p>
            <p>Senha - {user.senha}</p>
            <p> - </p>
        </div>
      ))}
      <hr/>
    </div>
  );
}

export default PaginaUsuario;
