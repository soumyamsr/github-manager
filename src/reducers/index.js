import { combineReducers } from "redux";
import userRepos from "./repo";
import repoIssues from "./issues";

export default combineReducers({
  userRepos,
  repoIssues
});
