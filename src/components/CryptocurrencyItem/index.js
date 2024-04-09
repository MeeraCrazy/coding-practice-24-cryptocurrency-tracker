// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyItemDetails} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} =
    cryptocurrencyItemDetails

  return (
    <li className="cryptocurrencyItem">
      <div className="log-and-title-container">
        <img
          src={currencyLogoUrl}
          alt={currencyName}
          className="currency-logo"
        />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
