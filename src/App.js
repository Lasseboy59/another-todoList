import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './components/todo'
import {addTodo, generateID} from './lib/todoHelpers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        { id: 1, name: 'Learn JSX', isCompleted: true },
        { id: 2, name: 'Build an Awesome App', isCompleted: false },
        { id: 3, name: 'Ship It!', isCompleted: false }
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const newId = generateID()
    const newTodo = {id: newId, name: this.state.currentTodo, isCompleted: false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: ''
    })
  }
 
  handleInputChange (e) {
    this.setState({
      currentTodo: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos with classes</h2>
        </div>
        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange}
          currentTodo={this.state.currentTodo}
          handleSubmit={this.handleSubmit}/>
          <TodoList todos={this.state.todos}/>

        </div>
      </div>
    );
  }
}

export default App;
