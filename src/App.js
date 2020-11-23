import React from 'react';
import './App.css';
import tasks from './samples/tasks.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
    };
  }

  render () {
    return(
      <div>
        {this.state.tasks.map(e => 
          <p>{e.title} - {e.description} - {e.done} - {e.id}</p>  
        )}
      </div>
    );
  };
}

export default App;
