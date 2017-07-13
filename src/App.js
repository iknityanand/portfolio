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
  cat: PropTypes.number.isRequired,
  txt(props, propName, component){
    if(!(propName in props)){
      return new Error('missing '+propName)
    }
    if(props[propName].length < 6){
      return new Error('too short');
    }
  }
}

App.defaultProps={
  txt: "Welcome to Nityanand Katare's Profile"
}

export default App
