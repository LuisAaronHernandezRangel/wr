import 'materialize-css/dist/css/materialize.min.css'
import React, { useState } from 'react';
import {useEffect}from "react"
import M from 'materialize-css';
import axios from "axios"

export const Form = () => {

    const [Name, setName] = useState("")
    const [Puesto, setPuesto] = useState()
    const [Idpersonal, setIdpersonal] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        let elements = document.querySelectorAll('select');
        M.FormSelect.init(elements);
    },[]);


    async function handleSubmit(e){
        e.preventDefault()
      
      try {
       const {data} = await axios({
        method: "Post",
        baseURL: `http://localhost:8000`,
        url:"/users",
        data: {
            Name,
            Puesto,
            Idpersonal
          },
      
       })
       setName(data)
       console.log(data)
       setLoading(false)
      } catch (error) { 
       setError(true)
       setLoading(false)
       console.log(error)
      }
      }
      
      if (loading) return <p>Loading...</p>
      if (error) return <p>ups...something went wrong!!!</p>

    return(

        <div class="container white">
         <div class="row">
            <div class="col s12 m6 offset-m3">
            <div class="card">
            <div class="card-image">
            <img src="../../../sample-1.jpg"/>
        </div>
        <div class="card-content">
        <div class="row">
            <form class="container" onSubmit={handleSubmit}>
            <div class="row">
                <div class="input-field col s12">
                <input id="first_name" type="text" class="validate" value={Name} onChange={(e) => setName(e.target.value)}/>
                <label for="first_name">Name</label>
                </div>
            </div>
            <div class="row">
            <div class="input-field col s12">
                <select value={Puesto} onChange={(e) => setPuesto(e.target.value)} >
                <option value="" disabled selected>Choose your option</option>
                <option value="Gerente">Gerente</option>
                <option value="Subgerente">Subgerente</option>
                <option value="Encargado">Encargado</option>
                <option value="Personal de Planta">Personal de Planta</option>
                </select>
                <label>Selecciona el puesto</label>
            </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                <input id="email" type="email" class="validate" value={Idpersonal} onChange={(e) => setIdpersonal(e.target.value)}/>
                <label for="email">ID Personal</label>
                </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
            </button>
            </form>
         </div>
        </div>
        <div class="card-action">
          <a href="Dashboard">Dashboard</a>
        </div>
      </div>
    </div>
  </div>
         </div>
    )
}
    