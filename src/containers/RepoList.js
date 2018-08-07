import React, { Component } from 'react';
import { connect } from 'react-redux';

import { listRepos } from '../reducers/repo';

class RepoList extends Component
{
  componentDidMount()
  {
    this.props.listRepos('relferreira');
  }

  renderItem = ({ item }) => (
      <li>{item.name}</li>
  );

  render() {
    const { repos } = this.props;
    return (
        <ul>{this.renderItem}</ul>
    );
  }
}


const mapStateToProps = state => {
  var storedRepositories = 0;
  if (state.listRepos)
  {
    storedRepositories = state.listRepos.map(repo => ({key: repo.id, ...repo}));
  }
  else
  {
    storedRepositories = 1;
  }

  return {
    repos: storedRepositories
  };
};

const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
