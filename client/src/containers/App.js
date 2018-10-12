import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import AllPost from './AllPost';
import RepoList from './RepoList';
import ExploreTransactions from "./ExploreTransactions";
import ExploreLedgers from "./ExploreLedgers";
import ExploreAssetPairs from "./ExploreAssetPairs";

const App = () => (

        <div className="App">
          <div className="navbar">
            <h2 className="center ">Barn Swallow (App.js)</h2>
          </div>
          {/*<PostForm />*/}
          {/*<AllPost />*/}
          {/*<RepoList/>*/}
          <ExploreAssetPairs />
          <ExploreTransactions />
          <ExploreLedgers />

        </div>
);

export default App;
