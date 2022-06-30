import '../App.css';
import React, { useState } from "react"



function Login() {
  const [name, setName] = useState()
  
  function validarUser() {
    // FAZER CHAMADA DE API AQUI PARA VALIDAR
    console.warn(name);
    return setName
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={validarUser}>
        <input type='text' /><br/>
        <input type='password' /><br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
