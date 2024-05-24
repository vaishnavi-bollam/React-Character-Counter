import {Component} from 'react'
import UserInputItem from './components/UserInputItem'
import './App.css'

// Replace your code here
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentInput: '',
      userInputList: [],
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
  }

  handleInputChange(event) {
    this.setState({currentInput: event.target.value})
  }

  handleAddButtonClick() {
    const {currentInput, userInputList} = this.state

    if (currentInput.trim()) {
      const newUserInput = {
        id: Date.now(),
        text: currentInput,
        count: currentInput.length,
      }

      this.setState({
        userInputList: [...userInputList, newUserInput],
        currentInput: '',
      })
    }
  }

  render() {
    const {currentInput, userInputList} = this.state
    const hasUserInputs = userInputList.length > 0

    return (
      <div className="App">
        <h1>Count the characters like a Boss</h1>
        <h1 className="heading">Character Counter</h1>
        <form>
          <input
            type="text"
            className="user-input"
            placeholder="Enter the Characters here"
            value={currentInput}
            onChange={this.handleInputChange}
          />
        </form>
        <button
          type="button"
          className="add-button"
          onClick={this.handleAddButtonClick}
        >
          Add
        </button>
        {hasUserInputs ? (
          <ul className="user-input-list">
            {userInputList.map(input => (
              <UserInputItem key={input.id} input={input} />
            ))}
          </ul>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
          />
        )}
      </div>
    )
  }
}

export default App
