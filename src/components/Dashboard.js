import React, {useState} from 'react'
import {useEffect}from "react"
import axios from "axios"

function Dashboard() {

    const [lesson, setLesson] = useState([])
    const [Name, setName] = useState("Luis Aaron Hernandez Rangel")
    const [Puesto, setPuesto] = useState("Gerente")
    const [Idpersonal, setIdpersonal] = useState("12345")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        
          setLoading(true)
          axios({
            method: 'GET',
            baseURL: "https://pokeapi.co/api/v2/pokemon?limit=2",
            // url: '/advertisements/perroAd',
          })
            .then(({ data }) => {
              setLesson(data.results)
              console.log(data.results)
            })
            .catch((error) => {
              setError(true)
              console.log(error)
            })
            .finally(() => {
              setLoading(false)
            
            })
    
       
      }, [])
  return (
    <div className="App">

      {
          !!lesson && lesson.map((pokemons)=>
          <div class="col s12 m7">
          <h2 class="header">Dashboard</h2>
          <div class="card horizontal">
            <div class="card-image">
              <img src="https://lorempixel.com/100/190/nature/6"/>
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <h4><span>Nombre: </span>{Name}</h4>
                <h5><span>Puesto: </span>{Puesto}</h5>
                <p><span>Id Personal: </span>{Idpersonal} </p>
              </div>
              <div class="card-action">
                <a href="/">Form</a>
              </div>
            </div>
          </div>
        </div>
        )
      }
      

    </div>
  );
}

export default Dashboard;