import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  render(){
    return (
      <div>
        <h1>{this.props.txt}</h1>
        <b>Total Projects = {this.props.cat}</b>
      </div>
      )
  }
}

App.propTypes ={
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps={
  txt: "Welcome to Nityanand Katare's Profile"
}

export default App