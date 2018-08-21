import React, { Component, Fragment } from "react";
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
import labels from "../../../public/labels.json";
import "./index.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h1 className="header-title">{labels.homepageHeader}</h1>
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
      </Fragment>
    );
  }
}

function mapStateToProps(store) {
  // console.log(store);
  return {
    repos: store.userRepos,
    issues: store.repoIssues
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps)(App);
