import React, { Component } from "react";
import { Link } from "react-router";

import messages from "../../../public/messages.json";
import labels from "../../../public/labels.json";
import "./index.scss";

class TableRow extends Component {
  constructor(props) {
    super(props);
  }

  selectRepo(route) {
    console.log("route: ", route);
  }

  render() {
    if (this.props.statusMessage) {
      return <div className="error-message">{this.props.statusMessage}</div>;
    } else if (this.props.repos && !this.props.repos.length) {
      return <div className="error-message">{messages.norepo}</div>;
    }
    return this.props.repos.map(repo => {
      return (
        <li className="border-bottom table-row" key={repo.id}>
          {/* <Link to="/"> */}
          <div className="table-row-wrapper">
            <div className="title">
              <h4>{repo.name}</h4>
            </div>
            <div className="select-repo">
              <button>{labels.selectBtn}</button>
            </div>
          </div>
          {/* </Link> */}
        </li>
      );
    });
  }
}

export default TableRow;
