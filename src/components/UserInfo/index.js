import React, { Component } from "react";
import { Link } from "react-router";

import messages from "../../../public/messages.json";
import labels from "../../../public/labels.json";
import "./index.scss";

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (
      this.props.issues &&
      this.props.issues.issues &&
      this.props.issues.issues.length
    ) {
      const user = this.props.issues.issues[0].user;
      return (
        <section className="user-info-wrapper">
          <a href={user.html_url} target="_blank" className="avatar">
            <img src={user.avatar_url} id="profileImage" alt={user.login} />
          </a>
          <div className="git-info">
            <span>{user.login}</span>
          </div>
        </section>
      );
    } else {
      return "";
    }
  }
}

export default UserInfo;
