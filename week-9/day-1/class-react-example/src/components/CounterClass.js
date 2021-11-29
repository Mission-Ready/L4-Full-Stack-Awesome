import React from 'react'

export default class CounterClass extends React.Component {
  constructor() {
    super()
    this.state = {count: 0}
    this.addCount = this.addCount.bind(this)
  }

  addCount() {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={this.addCount}>Add count</button>
      </div>
    )
  }
}
