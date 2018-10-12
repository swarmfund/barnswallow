import React, {Component} from 'react';
import {connect} from 'react-redux';

class Post extends Component {
  render() {
    return (
        <div className="post">
          <h2 className="post_title">{this.props.post.title}</h2>
          <p className="post_subtitle">https://invest-stage.swarm.fund/</p>
          <div className="control-buttons">
            <button className="edit"
                    onClick={() => this.props.dispatch({type: 'EDIT_POST', id: this.props.post.id})}>
              Edit
            </button>
            <button className="fetchBalance"
                    onClick={() => this.props.dispatch({type: 'FETCH_BALANCE', id: this.props.post.id})}>
              Fetch Balance
            </button>
            <button className="delete"
                    onClick={() => this.props.dispatch({type: 'DELETE_POST',   id: this.props.post.id})}>
              Disconnect
            </button>
          </div>
          <br/>
          <div>
            <p className="post_log">{this.props.post.log}</p>
          </div>
        </div>

    );
  }
}

export default connect()(Post);