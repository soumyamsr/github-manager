import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { browserHistory } from "react-router";
import { render } from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HomePage from "../HomePage/";
import NotFound from "../NotFound/";
import ListPage from "../ListPage/";
import IssuePage from "../IssuePage/";
import * as actions from "../../actions/";
import "./index.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <HomePage {...this.props} />}
          />
          <Route
            exact
            path="/:gituser/:gitrepo"
            render={props => <ListPage {...this.props} />}
          />
          <Route
            path="/:gituser/:gitrepo/issues/:issueId"
            render={props => <IssuePage {...this.props} />}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(store) {
  console.log(store);
  return {
    repos: store.userRepos.repos,
    status: store.userRepos.status,
    statusMessage: store.userRepos.message,
    issues: store.repoIssues
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps)(App);
