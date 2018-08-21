import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getGithubUserRepo } from "../../actions/";
import { Link } from "react-router";

import messages from "../../../public/messages.json";
import TableRow from "../../components/TableRow/";
import * as actions from "../../actions/";
import "./index.scss";

class ListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>List page</div>;
  }
}

export default ListPage;
