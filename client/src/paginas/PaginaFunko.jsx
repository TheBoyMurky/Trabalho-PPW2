import '../App.css';
import React, { useState, useEffect } from "react"
import Axios from 'axios'

function PaginaFunko() {
  const [nameCriar, setNameCriar] = useState("")
  const [valorCriar, setValorCriar] = useState("")
  const [urlImagemCriar, setUrlImagemCriar] = useState("")
  const [saleCriar, setSaleCriar] = useState(false)
  const [nameAlterar, setNameAlterar] = useState("")
  const [valorAlterar, setValorAlterar] = useState("")
  const [saleAlterar, setSaleAlterar] = useState("")
  const [nameDeletar, setNameDeletar] = useState("")
  let [ funkos, setFunkos ] = useState([{}]) 

  const url = "http://localhost:3001/"

  async function criarFunko(event) {
    event.preventDefault();
    const funkoToCreate = {
      name: nameCriar,
      valor: valorCriar,
      urlImagem: urlImagemCriar,
      sale: saleCriar
    }
    
    console.log(Axios.post(url + "createFunko", funkoToCreate))
  }
  
  async function alterarValor(event) {
    event.preventDefault();
    const funkoToAlter = {
      name: nameAlterar,
      valor: valorAlterar
    }
    
    console.log(Axios.put(url + "updateFunko", funkoToAlter))
  }
  async function alterarSale(event) {
    event.preventDefault();
    const funkoToAlter = {
      name: nameAlterar,
      sale: saleAlterar
    }
    
    console.log(Axios.put(url + "updateFunko", funkoToAlter))
  }

  async function deletarFunko(event) {
    event.preventDefault();
    const funkoToDelete = {
      name: nameDeletar
    }
    Axios.post(url + "deleteFunko", funkoToDelete)
  }

  // Handler Criar
  const handleNameCriar = event => {
    setNameCriar(event.target.value)
    console.log(nameCriar)
  }
  const handleValorCriar = event => {
    setValorCriar(event.target.value)
    console.log(valorCriar)
  }
  const handleUrlImagemCriar = event => {
    setUrlImagemCriar(event.target.value)
    console.log(urlImagemCriar)
  }
  const handleSaleCriar = event => {
    setSaleCriar(event.target.value)
    console.log(saleCriar)
  }
  // Handler Alterar
  const handleNameAlterar = event => {
    setNameAlterar(event.target.value)
    console.log(nameAlterar)
  }
  const handleValorAlterar = event => {
    setValorAlterar(event.target.value)
    console.log(valorAlterar)
  }
  const handleSaleAlterar = event => {
    setSaleAlterar(event.target.value)
    console.log(saleAlterar)
  }
  // Handler Delete
  const handleNameDeletar = event => {
    setNameDeletar(event.target.value)
    console.log(nameDeletar)
  }
  useEffect(() => {
      findAllFunkos()
  })

  function findAllFunkos(){
      let requisicao = Axios.get(url+"getFunkos");
      requisicao.then((resposta) => {
        setFunkos(resposta.data)
        console.log(funkos)
      })
  }

  return (
    <div>
      <h1>Adicionar Funko</h1>
      <form onSubmit={criarFunko}>
        <label>Funko: <input type='text' id="nameCriar" onChange={handleNameCriar} value={nameCriar} /></label><br/>
        <label>Valor: <input type='text' id="valorCriar" onChange={handleValorCriar} value={valorCriar} /></label><br/>
        <label>Url: <input type='text' id="urlImagemCriar" onChange={handleUrlImagemCriar} value={urlImagemCriar} /></label><br/>
        <label>Sale: <input type='text' id="saleCriar" onChange={handleSaleCriar} value={saleCriar} /></label><br/>
        <input type="submit" value="Entrar" name="" id="" />
      </form>
      <hr/>
      <h1>Alterar Valor Funko</h1>
      <form onSubmit={alterarValor}>
      <label>Funko: <input type='text' id="nameAlterar" onChange={handleNameAlterar} value={nameAlterar} /></label><br/>
      <label>Valor: <input type='text' id="valorAlterar" onChange={handleValorAlterar} value={valorAlterar} /></label><br/>
        <input type="submit" value="Entrar" name="" id="" />
      </form>
      <hr/>
      <h1>Alterar Sale Funko</h1>
      <form onSubmit={alterarSale}>
      <label>Funko: <input type='text' id="nameAlterar" onChange={handleNameAlterar} value={nameAlterar} /></label><br/>
      <label>Sale: <input type='text' id="saleAlterar" onChange={handleSaleAlterar} value={saleAlterar} /></label><br/>
        <input type="submit" value="Entrar" name="" id="" />
      </form>
      <hr/>
      <h1>Deletar Funko</h1>
      <form onSubmit={deletarFunko}>
      <label>Funko: <input type='text' id="nameDeletar" onChange={handleNameDeletar} value={nameDeletar} /></label><br/>
        <input type="submit" value="Entrar" name="" id="" />
      </form>
      <hr/>
      <h1>Lista Funkos</h1>
      {funkos.map(funko => (
        <div className='funko'>
            <p>Name - {funko.name}</p>
            <p>Valor - {funko.valor}</p>
            <p>Url - {funko.urlImagem}</p>
            {/* <p>Sale - {funko.sale}</p> */}
            <p> - </p>
        </div>
      ))}
      <hr/>
    </div>
  );
}

export default PaginaFunko;