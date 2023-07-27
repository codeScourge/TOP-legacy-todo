import React from 'react'
import { Component } from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types"

import TaskRow from './taskRow';

class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: ["read book", "code React"],
      taskInput: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.editTask = this.editTask.bind(this);
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

    if (this.state.taskInput == "") {
      console.log("Cant add empty task")
    } else {
      this.setState((state) => ({
        tasks: [...state.tasks, state.taskInput],
        taskInput: "",
      }))
    }
  }

  handleChange(event) {
    this.setState((state) => ({
      tasks: state.tasks,
      taskInput: event.target.value,
    }));
  }

  editTask(oldTask, newTask) {
    console.log(this.initialText, " --> ", this.state.input);
    this.setState((state) => {
      console.log(state);
      return {
        tasks: state.tasks.map((task) => {return task == oldTask ? newTask : task}),
        taskInput: state.taskInput,
    }})
  }

  render() {
    return  <>
              <div className="nav">
                <Link to="/" className="nav__element">home</Link>
                <Link to="/todo" className="nav__element">todo</Link>
              </div>

            <div className='wrapper'>
              <h3 className="wrapper__title">{this.props.title}</h3>

              <h5 className="wrapper__counter">number of tasks: {this.state.tasks.length}</h5>

              <form className="wrapper__add" onSubmit={this.handleSubmit}>
                <input className="wrapper__add__input" value={this.state.taskInput} onChange={this.handleChange} type="text" placeholder="enter new task"/>
                <input className="wrapper__add__submit" type="submit" />
              </form>

              <ul className="wrapper__tasks">
                {this.state.tasks.map((task, index) => {return  <TaskRow
                                                                    taskName={task}
                                                                    editFunction={this.editTask}
                                                                    deleteFunction={this.handleDelete}/>
                                                                    })}
              </ul>
            </div>
            </>

  }
}

TodoApp.propTypes = {
  title: PropTypes.string,
}

export default TodoApp
