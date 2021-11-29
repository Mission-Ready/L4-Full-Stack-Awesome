import React from 'react'

export default class MessageClass extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.message}
        {this.props.message2}
      </div>
    )
  }
}
