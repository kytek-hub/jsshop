import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { BsFillArchiveFill } from "react-icons/bs";

class HomePage extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <BsFillArchiveFill />
        <FaBeer />
      </div>
    )
  }
}
export default HomePage
