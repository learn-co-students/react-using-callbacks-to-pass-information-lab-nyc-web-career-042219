import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  state ={
    selectedColor: null
  }

  setSelectedColor = (color) => {
    console.log("clicked")
    this.setState({selectedColor: color})
  }

  getSelectedColor = () =>{
    return this.state.selectedColor
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell getSelectedColor={this.getSelectedColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    console.log(this.state)
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor}/>
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
