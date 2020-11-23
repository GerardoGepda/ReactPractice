import React from 'react';
import './App.css';
import tasks from './samples/tasks.json';
import Tasks from './components/Tasks';

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
        <Tasks tasks={this.state.tasks}/>
      </div>
    );
  };
}

export default App;
