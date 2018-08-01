import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import AllPost from './AllPost';
import RepoList from './RepoList';
import BlockchainExplorer from "./BlockchainExplorer";

const App = () => (

        <div className="App">
          <div className="navbar">
            <h2 className="center ">Barn Swallow (App.js)</h2>
          </div>
          <PostForm />
          <AllPost />
          <RepoList/>
          <BlockchainExplorer />
        </div>
);

export default App;