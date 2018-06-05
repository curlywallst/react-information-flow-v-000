import React from 'react'
import Tier3 from './Tier3'

const Tier2 = (props) => (
// export default class Tier2 extends Component {
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       // color: this.props.color,
//       // childColor: getReducedColor(this.props.color),
//     }
//   }

  // render() {
  //   // hard coded color values have been added below, though they won't be
  //   // present in our solution. What should they be replaced with?
  //   return (
      <div onClick={props.handleClick} className="tier2" style={{backgroundColor: props.color, color: props.color}}>
        <Tier3 color={props.childColor} handleChildClick={props.handleGrandchildClick} />
        <Tier3 color={props.childColor} handleChildClick={props.handleGrandchildClick} />
      </div>
    )

export default Tier2
//   }
// }
