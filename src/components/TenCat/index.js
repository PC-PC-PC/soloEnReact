// Dependencies
import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import './InterfazTenCat.css';

var respuesta;

var data = {
  labels:["Accesorios para Vehículos","Alimentos y Bebidas","Animales y Mascotas","Antigüedades y Colecciones"
  ,"Arte, Librería y Mercería","Autos, Motos y Otros","Bebés","Belleza y Cuidado Personal",
  "Cámaras y Accesorios","Celulares y Teléfonos","Computación","Consolas y Videojuegos",
  "Deportes y Fitness","Electrodomésticos y Aires Ac.","Electrónica, Audio y Video",
  "Entradas para Eventos","Herramientas y Construcción","Hogar, Muebles y Jardín",
  "Industrias y Oficinas","Inmuebles","Instrumentos Musicales","Joyas y Relojes",
  "Juegos y Juguetes","Libros, Revistas y Comics","Música, Películas y Series",
  "Ropa y Accesorios","Salud y Equipamiento Médico","Servicios","Souvenirs, Cotillón y Fiestas",
  "Otras categorías"],
  datasets:[
      {
          label:[],
          data:["0.10","0.88","16.2","10.7","11.1","1.95","4.80",
          "0.08","6.81","11.6","0.01","2.37","3.09","3.87","0.18","14.7",
          "0.00","0.04","0","0.00","0.24","0.02","0.06","0.24","0","0.57",
          "1.74","8.17","0.02","0.02"],
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
        res.json().then(function(resp){

          console.log(resp.data);
          respuesta = JSON.stringify(resp)
          console.log(respuesta)
          
          console.log('la de arriba es la respuesta')
        })

      })
    
       .then(function (res) { 
        console.log(res);
        respuesta = JSON.stringify(res)
        console.log(respuesta)
      })

  }
  ultimo_dia(){

  } 
  ultima_semana(){

  }
  ultimo_mes(){

  }
  ultimo_año(){

  }
  render() {

    return (

      <div className = "TenCat">

        <h1 style={{textAlign: 'center'}} class = "titulo" >Tendencias x Categoría</h1>

        <p style={{color:"#7c7d7e",backgroundColor:"#ebebeb"}}>&nbsp;Ventas realizadas en el tiempo.&nbsp;</p>
        <form onSubmit={this.handleSubmit}>

          <div algo = "alinear">
            <div class = "inner">
              <button onClick = {this.ultimo_dia.bind(this)} type = "button" class = "btn btn-primary" > Ultimo dia </button>
            </div>
  
            <div class = "inner">
              <button onClick = {this.ultima_semana.bind(this)} type = "button" class = "btn btn-dark" > Ultima semana </button>
            </div>

            <div class = "inner">
              <button onClick = {this.ultimo_mes.bind(this)} type = "button" class = "btn btn-success" > Ultimo mes </button>
            </div>

            <div class = "inner">
              <button onClick = {this.ultimo_año.bind(this)} type = "button" class = "btn btn-danger" > Ultimo año </button>
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