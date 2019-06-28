import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  state ={
    color: "rbg(255, 255, 255)"
  }

  colorHandle =(event) =>{
    if (event.target.className === "color-swatch"){
      this.setState({
        color:event.target.style.backgroundColor
      })
    }
  }

  changeColor = (event) =>{
    event.target.style.backgroundColor = this.state.color
  }


  constructor() {
    super()
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row" onClick={this.changeColor} >{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector colorHandle ={this.colorHandle}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
