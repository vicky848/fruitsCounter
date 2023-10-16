import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onMangoButton = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onBananaButton = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count"> {bananaCount}</span> bananas
          </h1>

          <div className="main-fruits-container">
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img"
                alt="mango"
              />
              <div>
                <button
                  className="btn"
                  type="button"
                  onClick={this.onMangoButton}
                >
                  Eat Mango
                </button>
              </div>
            </div>

            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img"
                alt="banana"
              />
              <div>
                <button
                  className="btn"
                  type="button"
                  onClick={this.onBananaButton}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
