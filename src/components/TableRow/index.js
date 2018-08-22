import React, { Component } from "react";
import { Link } from "react-router";
import { Redirect } from "react-router-dom";

import messages from "../../../public/messages.json";
import labels from "../../../public/labels.json";
import "./index.scss";

class TableRow extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    redirect: false
  };

  selectRepo(route) {
    // console.log("route: ", route);
    this.setState({
      redirect: `/${route}`
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    } else if (this.props.repos.message) {
      return <div className="error-message">{this.props.repos.message}</div>;
    } else if (
      this.props.repos &&
      this.props.repos.repos &&
      !this.props.repos.repos.length
    ) {
      return <div className="error-message norepo">{messages.norepo}</div>;
    }
    return this.props.repos.repos.map(repo => {
      return (
        <li
          className="border-bottom table-row"
          key={repo.id}
          onClick={() => this.selectRepo(repo.full_name)}
        >
          <div className="table-row-wrapper">
            <div className="title">
              <h4>{repo.name}</h4>
            </div>
            <div className="select-repo">
              <button>{labels.selectBtn}</button>
            </div>
          </div>
        </li>
      );
    });
  }
}

export default TableRow;
