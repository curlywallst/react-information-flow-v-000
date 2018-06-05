import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    const initialChildColor = getReducedColor(initialColor)
    this.state = {
      color: initialColor,
      childColor: initialChildColor,
      grandchildColor: getReducedColor(initialChildColor),
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let newColor = getRandomColor()
    let newChildColor = getReducedColor(newColor)
    let newGrandchildColor = getReducedColor(newChildColor)
    this.setState({color: newColor})
    this.setState({childColor: newChildColor})
    this.setState({grandchildColor: newGrandchildColor})
  }

  handleChildClick(e) {
    e.stopPropagation()
    let newColor=getRandomColor()
    let newChildColor= getReducedColor(newColor)
    this.setState({childColor: newColor})
    this.setState({grandchildColor: newChildColor})
  }
  
//OR can do it this way with ES7
  handleGrandchildClick = (e) => { //Binds this as the component that contains it
    e.stopPropagation() //Needed because it would bubble click events up
    let newColor=getRandomColor()
    this.setState({grandchildColor: newColor})
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} childColor={this.state.grandchildColor} handleClick={this.handleChildClick.bind(this)} handleGrandchildClick={this.handleGrandchildClick}/>
        <Tier2 color={this.state.childColor} childColor={this.state.grandchildColor} handleClick={this.handleChildClick.bind(this)} handleGrandchildClick={this.handleGrandchildClick} />
      </div>
    )
  }
}
