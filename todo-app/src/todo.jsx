import React from 'react'
import { Component } from 'react'

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: ["read book", "code React"],
      taskInput: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.getLength = () => {return this.state.tasks.length}
  }

  handleDelete(event) {
    const taskName = event.target.id;
    console.log("deleting ", taskName);

    this.setState((state) => ({
      tasks: state.tasks.filter((task) => {return task == taskName ? false : true}),
      taskInput: state.taskinput
    }))
  }

  handleSubmit(event) {
    console.log("submiting");
    event.preventDefault();

    this.setState((state) => ({
      tasks: [...state.tasks, state.taskInput],
      taskInput: "",
    }))
  }

  handleChange(event) {
    this.setState((state) => ({
      tasks: state.tasks,
      taskInput: event.target.value,
    }));
  }

  render() {
    return  <div className='wrapper'>
              <h3 className="wrapper__title">{this.props.title}</h3>

              <h5 className="wrapper__counter">number of tasks: {this.getLength}</h5>

              <form className="wrapper__add" onSubmit={this.handleSubmit}>
                <input className="wrapper__add__input" value={this.state.taskInput} onChange={this.handleChange} type="text" placeholder="enter new task"/>
                <input type="submit" />
              </form>

              <ul className="wrapper__tasks">
                {this.state.tasks.map((task, index) => {return  <li className="task" key={index}>
                                                                  <h5 className="task__text">{task}</h5>
                                                                  <svg id={task} className="task__svg" onClick={this.handleDelete} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#FFFFFF" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path></g></svg>
                                                                </li>})}
              </ul>
            </div>
  }
}

export default TodoApp
