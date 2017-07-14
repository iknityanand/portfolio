import React from 'react';

class ReactSyntheticEventSystem extends React.Component{
  constructor(){
    super();
    this.state={
      modEvent: '----'
    }
    this.update=this.update.bind(this)
  }

  update(e){
    this.setState({modEvent: e.type})
  }

  render(){
    return (
      <div>
        <textarea
        onKeyPress={this.update}
        cols="30"
        rows="10" />
        <h1>{this.state.modEvent}</h1>
      </div>
    )
  }
}

export default ReactSyntheticEventSystem
