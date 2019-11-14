// Dependencies
import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import './InterfazTenCat.css';

var respuesta;

var data = {
  labels:[/*CREAR VARIABLE QUE DEFINE LA CANTIDAD DE CAMPOS DEL GRÁFICO*/],
  datasets:[
      {
          label:"AA",
          data:[/*ENLAZAR CON LABELS (ANTERIOR)*/],
          backgroundColor:["rgb(0, 152, 70)","rgb(230, 0, 38)","rgb(255, 233, 0)"],
          borderColor:"rgb(255,255,255)"
      }
  ]
}

var options = {
maintainAspectRtio: false,
  scales: {
    yAxes: [{
        ticks: {
            beginAtZero: true
        }
    }]
  }
}

class TenCat extends Component {
  componentDidMount() {
    fetch('https://api.github.com/orgs/nodejs')
      .then(function (res) {
        console.log(res)}
      )

    fetch('http://localhost:4000/TenCat')
      .then(function (res) { 
        console.log(res);
        respuesta = JSON.stringify(res)
        console.log(respuesta)
      })
    fetch('http://localhost:4000/MLHuergo/CatTend/add', { 
                        
      method: 'POST',
      body: JSON.stringify(
        {
          "_name": "Accesorios para VehículosMax",
          "_day": "Irrelevante",
          "_cant": 0         
        },
        {
          "_name": "Alimentos y BebidasMax",
          "_day": "Irrelevante",
          "_cant": 0
        },
        {
          "_name": "Animales y MascotasMax",
          "_day": "Irrelevante",
          "_cant": 0     
        },
        {
          "_name": "Antigüedades y ColeccionesMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Arte, Librería y MerceríaMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Autos, Motos y OtrosMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "BebésMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Belleza y Cuidado PersonalMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Cámaras y AccesoriosMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Celulares y TeléfonosMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "ComputaciónMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Consolas y VideojuegosMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Deportes y FitnessMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Electrodomésticos y Aires Ac.Max",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Electrónica, Audio y VideoMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Entradas para EventosMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Herramientas y ConstrucciónMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Hogar, Muebles y JardínMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Industrias y OficinasMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "InmueblesMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Instrumentos MusicalesMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Joyas y RelojesMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Juegos y JuguetesMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Libros, Revistas y ComicsMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Música, Películas y SeriesMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Ropa y AccesoriosMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Salud y Equipamiento MédicoMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "ServiciosMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Souvenirs, Cotillón y FiestasMax",
          "_day": "Irrelevante",
          "_cant": 0    
        },
        {
          "_name": "Otras categoríasMax",
          "_day": "Irrelevante",
          "_cant": 0    
        }
      ),
      headers:{
          'Content-Type': 'application/json',
      }

     })
      .then(function (res) { 
        console.log(res);
        respuesta = JSON.stringify(res)
        console.log(respuesta)
      })

  }
  render() {

    return (

      <div className = "TenCat">

        <h1 style={{textAlign: 'center'}} class = "titulo" >Tendencias x Categoría</h1>

        <p style={{color:"#7c7d7e",backgroundColor:"#ebebeb"}}>&nbsp;Ventas realizadas en el tiempo.&nbsp;</p>
        <form onSubmit={this.handleSubmit}>

          <div algo = "alinear">
            <div class = "inner">
              <button class =  "dia" >
                Último día
              </button>
            </div>
  
            <div class = "inner">
              <button class =  "semana" >
                Última semana
              </button>
            </div>

            <div class = "inner">
              <button class =  "mes" >
                Último mes
              </button>
            </div>

            <div class = "inner">
              <button class =  "año" >
                Último año
              </button>
            </div>
        
          </div>

          </form>

        <Pie
               data={data}
               options= {options}
               height = {20}
               width = {50}
                />   
      </div>
      
    );

  } 

}

export default TenCat;