import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  ADD_POST
} from '../components/ActionTypes';

import { post } from '../reducers/post';

class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    }
    this.props.dispatch({
      type: ADD_POST,
      data
    });
    this.getTitle.value = '';
    this.getMessage.value = '';
  };
  render() {
    return (
        <div className="post-container">
          <h1 className="post_heading">Connect to Staging</h1>
          <p className="post_subtitle">https://invest-stage.swarm.fund/</p>
          <form className="form" onSubmit={this.handleSubmit} >
            <input required type="text" ref={(input) => this.getTitle = input}
                   placeholder="Enter username" /><br /><br />
            <input required type="password" ref={(input) => this.getMessage = input}
                   placeholder="Enter password" /><br /><br />
            <button>Submit</button>
          </form>
        </div>
    );
  }
}
export default connect()(PostForm);
