import { FETCH_SURVEYS } from "../actions/types";

export const fetchSurveys = (state = [], action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
};

export default fetchSurveys;
