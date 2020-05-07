import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = [
      {
      task: 'Walk 1 mile',
      id: 1,
      completed: false,
      },
      {
        task: 'Do 10 pushups',
        id: 2,
        completed: false,
        },
        {
          task: 'Swim 15 laps',
          id: 3,
          completed: false,
          }
      ];

      const submitHandler = () => {

      }
      const deleteTodos = () => {
        
      }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
