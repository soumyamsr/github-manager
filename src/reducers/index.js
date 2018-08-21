import { combineReducers } from "redux";
import userRepos from "./repo";
import repoIssues from "./issues";
import issueDetail from "./issue-detail";

export default combineReducers({
  userRepos,
  repoIssues,
  issueDetail
});
