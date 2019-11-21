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
          data:[],
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

function otrafuncion(thisComponent) {
  fetch('https://api.github.com/orgs/nodejs')
    .then(function (res) {
      console.log(res)}
    )

  fetch('http://localhost:4000/TenCat')
    .then(function (res) { 
      res.json().then(function(resp){
        
        //console.log(resp.data);
        respuesta = resp.slice(1,31)
        console.log(respuesta)
        data.datasets[0].data = respuesta
        console.log('la de arriba es la respuesta')
        
        //recorrerlalista
        //elegir los 10 mas grandes
        //sumar las cantidades de los demás (los mas chicos)
        //eliminar a los demas de las dos Listas (la de labels y la de cantidad)
        //crear un label "otro"
        //poner en la posición del label "otro" la suma calculada antes

        //console.log(data.datasets[0].data)
        thisComponent.setState({cambio: true})
        thisComponent.setState({cambio: false})
      })

    }).then(function (res) { 
      console.log(res);
      respuesta = JSON.stringify(res)
      console.log(respuesta)
    })
}


class TenCat extends Component {
  constructor(props) {
    super(props)
    this.state = { cambio: false};
    //this.componentDidMount = this.componentDidMount.bind(this);
    otrafuncion = otrafuncion.bind(this);
  }


  componentDidMount() {
    let thisComponent = this
    otrafuncion(thisComponent)
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
               redraw />   
      </div>
      
    );

  } 

}

export default TenCat;