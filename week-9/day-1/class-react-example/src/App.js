import React from 'react';
import './App.css';
import CounterFunc from './components/CounterFunc';
import CounterClass from './components/CounterClass'
import MessageClass from './components/MessageClass'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterFunc />
        <CounterClass />
        <MessageClass message="This is the message" message2="this is a second message"/>
      </div>
    )
  }
}

export default App;
