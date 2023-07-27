import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

import React from 'react'
import { Component } from 'react'

export default class TaskRow extends Component {
    constructor(props) {
      super(props)

      // the initial text

      this.state = {
        input: props.taskName,
        visible: false,
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }

    handleSubmit() {
      this.props.editFunction(this.props.taskName, this.state.input);
      this.setState(state => ({
        input: state.input,
        visible: false,
      }))
    }

    handleEdit() {
      this.setState(state => ({
        input: this.props.taskName,
        visible: true,
      }))
    }

    handleChange(event) {
      this.setState((state) => ({
        input: event.target.value,
        visible: state.visible
      }));
    }

    render() {
      return  <li className="task" key={uuidv4()} id={this.props.taskName}>
                 <svg id={this.props.taskName} className="task__svg" onClick={this.props.deleteFunction} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#FFFFFF" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path></g></svg>
                 <input className='task__input' value={this.state.input} style={{display: this.state.visible ? "flex" : "none"}} onChange={this.handleChange} type="text"/>
                 <button className='task__edit' onClick={this.state.visible ? this.handleSubmit : this.handleEdit}>{this.state.visible ? "resubmit" : "edit"}</button>
                 <h5 className="task__text">{this.props.taskName}</h5>
              </li>
    }
  }

 TaskRow.propTypes = {
    editFunction: PropTypes.func,
    deleteFunction: PropTypes.func,
    taskName: PropTypes.string,
  }
