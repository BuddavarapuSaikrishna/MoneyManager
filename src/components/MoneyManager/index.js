import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    Balance: 0,
    Income: 0,
    Expenses: 0,
  }

  render() {
    const {Balance, Income, Expenses} = this.state

    return (
      <div className="App-container">
        <div className="Welcome-container">
          <h1 className="account-holder-name">Hi, Richard</h1>
          <p className="Greeting ">
            Welcome back to your
            <span className="money-manager"> Money Manager</span>
          </p>
        </div>

        <MoneyDetails />
        <div className="Transaction-Container">
          <div className="Transaction-inputs-container">
            <h1>Add Transaction</h1>
            <form className="form">
              <label htmlFor="title">Title</label>
              <input className="Title" id="title" type="text" />
              <label htmlFor="amount">Amount</label>
              <input className="Amount" id="amount" type="number" />
              <label htmlFor="type">Type</label>
              <select className="Type" id="type">
                <option>Income</option>
                <option>Expenses</option>
              </select>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="History-container">
            <h1>History</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
