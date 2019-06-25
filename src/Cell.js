import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  clickEvent =() => {
    const changeColor = this.props.getColor();
    this.setState({
      color: changeColor,
    });
  };
  
  render() {
    return (
      <div onClick={this.clickEvent} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
