import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getGithubUserRepo } from "../../actions/";
import { Link } from "react-router";

import config from "../../../public/config.json";
import messages from "../../../public/messages.json";
import IssueRow from "../../components/IssueRow/";
import IssueHeader from "../../components/IssueHeader";
import * as actions from "../../actions/";
import "./index.scss";

class ListPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const gituser = "soumyamsr";
    // const gitrepo = "store-picker";
    const { gituser, gitrepo } = this.props.match.params;
    if (gituser && gitrepo) {
      fetch(`${config.GIT_USER_REPO_URL}/repos/${gituser}/${gitrepo}/issues`)
        .then(res => {
          return res.json();
        })
        .then(res => {
          actions.getIssuesSuccess(res, this.props);
        })
        .catch(error => {
          actions.getIssuesError(error, this.props);
        });
    }
  }

  render() {
    return (
      <section className="list-page-wrapper">
        <div className="user-issues-list">
          {this.props.issues ? <IssueHeader {...this.props} /> : ""}
          <ul>{this.props.issues ? <IssueRow {...this.props} /> : ""}</ul>
        </div>
      </section>
    );
  }
}

export default ListPage;
