// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrrenciesHeader = () => {
    return (
      <li className="list-header">
        <h1 className="list-coin-type-heading">Coin Type</h1>
        <div className="usd-euro-value-container">
          <p className="list-coin-value-heading">USD</p>
          <p className="list-coin-value-heading">EURO</p>
        </div>
      </li>
    )
  }

  renderCryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="cryptocurrencies-list-container">
        {this.renderCryptocurrrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyItemDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="cryptocurrency-img"
          alt="cryptocurrency"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
