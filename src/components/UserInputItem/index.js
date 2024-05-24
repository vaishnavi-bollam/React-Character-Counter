import React from 'react'

class UserInputItem extends React.Component {
  render() {
    const {input} = this.props
    return (
      <li className="user-input-item">
        <p>
          {input.text} : {input.count}
        </p>
      </li>
    )
  }
}

export default UserInputItem
