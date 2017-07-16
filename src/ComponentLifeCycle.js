import React from 'react';
import ReactDOM from 'react-dom';

class ComponentLifeCycle extends React.Component{
  constructor(){
    console.log('constructor');
    super();
    this.state={
      val: 0
    }
    this.update = this.update.bind(this)
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  render(){
    console.log('render');
    return <button onClick={this.update}>{this.state.val}</button>
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  update(){
    this.setState({
      val: this.state.val + 1
    })
  }
}

class Wrapper extends React.Component{
  mount(){
    ReactDOM.render(<ComponentLifeCycle />, document.getElementById('a'))
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper
