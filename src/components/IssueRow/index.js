import React, { Component } from "react";
import { Link } from "react-router";

import messages from "../../../public/messages.json";
import labels from "../../../public/labels.json";
import { formatDate } from "../../utils/dateUtils";
import "./index.scss";

class IssueRow extends Component {
  constructor(props) {
    super(props);
  }

  selectIssue(route) {
    console.log("route: ", route);
  }

  render() {
    if (this.props.issues.message) {
      return <div className="error-message">{this.props.issues.message}</div>;
    } else if (
      this.props.issues &&
      this.props.issues.items &&
      !this.props.issues.items.length
    ) {
      return <div className="error-message">{messages.noissues}</div>;
    } else if (
      this.props.issues &&
      this.props.issues.items &&
      this.props.issues.items.length
    ) {
      return this.props.issues.items.map(issue => {
        return (
          <li className="border-bottom issue-row" key={issue.id}>
            <div className="issue-row-wrapper">
              <div className="title">
                <div className="first-line">
                  <span className={"icon status " + issue.state} />
                  {issue.title}
                </div>
                <div className="second-line">
                  <span className="issue-num">
                    #<b>{issue.number}</b>,{" "}
                  </span>
                  <span className="comments-num">
                    {issue.comments} comments,{" "}
                  </span>
                  <span className="update-time">
                    updated on {formatDate(issue.updated_at)},{" "}
                  </span>
                  <span className="update-time">
                    created by <b>{issue.user.login}</b>
                  </span>
                </div>
              </div>
            </div>
          </li>
        );
      });
    } else {
      return "";
    }
  }
}

export default IssueRow;
