import React from 'react'
import { Component } from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types"

class TextField extends Component {
  constructor(props) {
    super(props)

    // function which takes oldTask and newTask and replaces it in the parent component
    this.editFunction = props.editFunction;

    // the initial text

    this.state = {
      input: props.initialText,
      initialText: props.initialText,
      visible: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit() {
    this.editFunction(this.state.initialText, this.state.input);
    this.setState(state => ({
      input: state.input,
      initialText: state.input,
      visible: false,
    }))
  }

  handleEdit() {
    this.setState(state => ({
      input: state.input,
      initialText: state.initialText,
      visible: true,
    }))
  }

  handleChange(event) {
    this.setState((state) => ({
      input: event.target.value,
      initialText: state.initialText,
      visible: state.visible
    }));
  }

  render() {
    return  <>
               <input className='task__input' value={this.state.input} style={{display: this.state.visible ? "flex" : "none"}} onChange={this.handleChange} type="text"/>
               <button className='task__edit' onClick={this.state.visible ? this.handleSubmit : this.handleEdit}>{this.state.visible ? "resubmit" : "edit"}</button>
            </>
  }
}

TextField.propTypes = {
  editFunction: PropTypes.func,
  initialText: PropTypes.string,
}

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
                {this.state.tasks.map((task, index) => {return  <li className="task" key={index}>
                                                                  <svg id={task} className="task__svg" onClick={this.handleDelete} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#FFFFFF" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path></g></svg>
                                                                  <TextField
                                                                    initialText={task}
                                                                    editFunction={this.editTask}>
                                                                  </TextField>
                                                                  <h5 className="task__text">{task}</h5>
                                                                </li>})}
              </ul>
            </div>
            </>

  }
}

TodoApp.propTypes = {
  title: PropTypes.string,
}

export default TodoApp
