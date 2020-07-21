import axios from "axios";

import { FETCH_USER, FETCH_SURVEYS } from "./types";

export const fetchUser = () => async (dispatch) => {
  try {
    let { data } = await axios.get("/api/current_user");
    dispatch({
      type: FETCH_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleToken = (token) => async (dispatch) => {
  try {
    let { data } = await axios.post("/api/stripe", token);
    dispatch({
      type: FETCH_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const sendSurvey = (survey, history) => async (dispatch) => {
  let { data } = await axios.post("/api/surveys", survey);
  history.push("/surveys");
  dispatch({
    type: FETCH_USER,
    payload: data,
  });
};

export const fetchSurveys = () => async (dispatch) => {
  let { data } = await axios.get("/api/surveys");
  dispatch({
    type: FETCH_SURVEYS,
    payload: data,
  });
};
