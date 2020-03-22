import React from 'react';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  toggleTodo = (event, todoId) => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();

    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  };

  addTodo = (event, todoName) => {
    const newTodo = {
      id: Date.now(),
      task: todoName,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  
  render() {
    return (
      <div>

      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        </div>
        <div>
        {this.state.todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onClick={e => this.toggleTodo(e, todo.id)}
          />
        ))}
        </div>
        <div>
      <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
      </div>
      
    );
  }
}

export default App;
