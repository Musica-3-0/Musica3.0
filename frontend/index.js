import React, { useEffect, useState } from "react";
import axios from 'axios';
import Music from "./music";

function Music(){
    const [info, setInfo] = useState([])
    const [endpoint, setBusqueda] = useState("")

     const getData = async() => {
    const url =`https://api.spotify.com/${endpoint}`
    const resp = await axios.get(url)
    setInfo(resp.data.data)
    console.log(resp.data.data)
    }

    useEffect(() =>{
        getData(); 
    },[])

    const handleInput = (e) =>{
        setBusqueda(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit  = () =>{
    getData()
    setBusqueda('')
    }

    return(
        <div>
            <h1>La musica</h1>

            <input type="text" onChange={handleInput}/>
            <button onClick={handleSubmit}>Enviar</button>

            <Dataghf info={info}/>
        </div>
    )
}

export default Music