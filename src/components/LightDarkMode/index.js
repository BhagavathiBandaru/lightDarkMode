// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isClick: true,
  }

  onClickScreenBackgroundChange = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }

  render() {
    const {isClick} = this.state
    const classNameChange = isClick ? 'container-dark' : 'container-light'
    const buttonTextEle = isClick ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container-1">
        <div className={`container-2 ${classNameChange}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            type="button"
            onClick={this.onClickScreenBackgroundChange}
            className="button"
          >
            {buttonTextEle}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
