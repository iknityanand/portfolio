import React from 'react';

class App extends React.Component{
  render(){
    return (
      <div>
        <h1>{this.props.txt}</h1>
        <b>watching you!</b>
      </div>
      )
  }
}
export default App