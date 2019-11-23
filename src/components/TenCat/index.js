// Dependencies
import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import './InterfazTenCat.css';

var respuesta;

var data = {
  labels:[],
  datasets:[
      {
          label:[],
          data:[],
          backgroundColor:["rgb(0, 152, 70)","rgb(230, 0, 38)","rgb(255, 233, 0)","rgb(125, 33, 129)", "rgb(13, 29, 162)", "rgb(162, 65, 13)", "rgb(23, 215, 212)", "rgb(241, 111, 254)", "rgb(255, 129, 35)", "rgb(0,0,0)", "rgb(99, 225, 79)"],
          borderColor:"rgb(255,255,255)"
      }
  ]
}

var data2 = {
  labels:["a", "b"],
  datasets:[
    {
      label:["a"],
      data:[500,200],
      backgroundColor:["rgb(0, 152, 70)", "rgb(13, 29, 162)", "rgb(162, 65, 13)", "rgb(23, 215, 212)", "rgb(241, 111, 254)", "rgb(255, 129, 35)", "rgb(0,0,0)", "rgb(99, 225, 79)"],
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

        //console.log(resp);
        respuesta = resp; 
        console.log(respuesta)
        data.datasets[0].data = respuesta[0]
        data.labels = respuesta[1]
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
               redraw />   

          <p style={{textAlign: 'center'}} class = "titulo" >Ventas x Categoría</p>

        <Pie
               data2={data}
               options= {options}
               height = {20}
               width = {50}
               redraw />   
      </div>
      
    );

  } 

}

export default TenCat;