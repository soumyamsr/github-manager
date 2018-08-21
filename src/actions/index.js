import config from "../../public/config.json";
import userRepos from "../reducers/repo";
import messages from "../../public/messages.json";

export const getGithubUserRepo = (user, props) => {
  if (user) {
    fetch(config.GIT_USER_REPO_URL + `/${user}/repos`)
      .then(resp => resp.json())
      .then(userRepos => {
        props.dispatch({ type: "GET_USER_REPOS", payload: userRepos });
      })
      .catch(error => {
        props.dispatch({ type: "GET_USER_REPOS_ERROR", message: error });
      });
  }
};
