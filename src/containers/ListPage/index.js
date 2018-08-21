import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getGithubUserRepo } from "../../actions/";
import { Link } from "react-router";
import Paginate from "react-paginate";

import config from "../../../public/config.json";
import messages from "../../../public/messages.json";
import IssueRow from "../../components/IssueRow/";
import IssueHeader from "../../components/IssueHeader/";
import UserInfo from "../../components/UserInfo/";
import * as actions from "../../actions/";
import "./index.scss";

class ListPage extends Component {
  constructor(props) {
    super(props);
    this.currentPage = 1;
  }

  componentDidMount() {
    const gituser = "soumyamsr";
    const gitrepo = "store-picker";
    // const { gituser, gitrepo } = this.props.match.params;
    if (gituser && gitrepo) {
      fetch(`${config.GIT_REPO_ISSUE_URL}/${gituser}/${gitrepo}/issues`)
        .then(res => {
          return res.json();
        })
        .then(res => {
          console.log(res);
          actions.getIssuesSuccess(res, this.props);
        })
        .catch(error => {
          actions.getIssuesError(error, this.props);
        });
    }
  }

  render() {
    const pageCount =
      this.props.issues && this.props.issues.issues
        ? Math.ceil(this.props.issues.issues.length / config.ISSUES_ON_PAGE)
        : 1;
    return (
      <Fragment>
        <UserInfo {...this.props} />
        <section className="list-page-wrapper">
          <div className="user-issues-list">
            {this.props.issues ? <IssueHeader {...this.props} /> : ""}
            <ul>{this.props.issues ? <IssueRow {...this.props} /> : ""}</ul>
          </div>
          <div className="issues__pagination">
            <Paginate
              forcePage={this.currentPage}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageChange}
              nextLabel="&rarr;"
              previousLabel="&larr;"
            />
          </div>
        </section>
      </Fragment>
    );
  }

  handlePageChange = ({ selected }) => {
    this.currentPage = selected + 1;
    const newItems = this.props.issues.issues.slice(
      selected * config.ISSUES_ON_PAGE,
      this.currentPage * config.ISSUES_ON_PAGE
    );
    actions.changePage(newItems, this.props);
    console.log("new Items: ", newItems);
  };
}

export default ListPage;
