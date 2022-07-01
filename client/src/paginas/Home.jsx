import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../styles/Funko.css'

function Home() {

    const url = "http://localhost:3001/getFunkos"
    let [ funkos, setFunkos ] = useState([{}]) 

    useEffect(() => {
        findAllFunkos()
    })

    function findAllFunkos(){
        let requisicao = Axios.get(url);
        requisicao.then((resposta) => {
            setFunkos(resposta.data)
            console.log(funkos)
        })
    }

    return (
        <div>
            <h3>RESULTADOS</h3>
            <div className='container'>
                {funkos.map(funko => (
                    <div className='funko'>
                        <img src={funko.urlImagem} alt="Funko"></img>
                        <p><b>{funko.name}</b></p>
                        <p><small>R${funko.valor}</small></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
