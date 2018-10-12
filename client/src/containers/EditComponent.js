import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    }
    this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
  }
  render() {
    return (
        <div key={this.props.post.id} className="post">
          <form className="form" onSubmit={this.handleEdit}>
            <input required type="text" ref={(input) => this.getTitle = input}
                   defaultValue={this.props.post.title} placeholder="Edit username" /><br /><br />
            <input required type="password" ref={(input) => this.getMessage = input}
                      defaultValue={this.props.post.message} placeholder="Edit password" /><br /><br />
            <button>Update</button>
          </form>
        </div>
    );
  }
}
export default connect()(EditComponent);