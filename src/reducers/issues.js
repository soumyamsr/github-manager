const repoIssues = (state = [], action) => {
  switch (action.type) {
    case "GET_ISSUES_SUCCESS":
      return {
        issues: action.issues,
        status: true,
        message: ""
      };
      break;
    case "GET_ISSUES_FAILURE":
      return {
        issues: {},
        status: true,
        message: action.error
      };
      break;

    default:
      return state;
  }
};

export default repoIssues;
