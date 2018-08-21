import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getGithubUserRepo } from "../../actions/";
import { Link } from "react-router";

import messages from "../../../public/messages.json";
import TableRow from "../../components/TableRow/";
import * as actions from "../../actions/";
import "./index.scss";

class IssuePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Issue page</div>;
  }
}

export default IssuePage;
