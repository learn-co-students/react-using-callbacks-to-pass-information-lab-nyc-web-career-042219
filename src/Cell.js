import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  clicked = () => {
    let newColor = this.props.currentColor()
    this.setState({
      color: newColor
    })
  }
  
  render() {
    return (
      <div
      className="cell" style={{backgroundColor: this.state.color}}
      onClick={this.clicked}>  
      </div>
    )
  }
  
}
