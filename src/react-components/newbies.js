import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <h2>Hello newbies</h2>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
