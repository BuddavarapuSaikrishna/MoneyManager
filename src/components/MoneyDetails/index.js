// Write your code here

import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    return (
      <p className="Money-Details-Container">
        <p className="balance-container">
          <img
            className="bank-icons"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <p className="money-description">
            <p>Your Balance</p>
            <p className="show-balance">Rs</p>
          </p>
        </p>
        <div className="income-container">
          <img
            className="bank-icons"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
            alt="income"
          />
          <div className="money-description">
            <p>Your Income</p>
            <p className="show-balance">Rs</p>
          </div>
        </div>
        <div className="expenses-container">
          <img
            className="bank-icons"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <div className="money-description">
            <p>Your Expenses</p>
            <p className=" show-balance">Rs</p>
          </div>
        </div>
      </p>
    )
  }
}

export default MoneyDetails
