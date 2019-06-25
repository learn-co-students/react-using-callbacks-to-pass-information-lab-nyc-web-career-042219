import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  setCellColor = () =>{
    console.log(this.props)
    let newColor = this.props.getSelectedColor();
    console.log(newColor)
    this.setState({color: newColor})
  }
  
  render() {
    return (
      <div onClick={this.setCellColor} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
