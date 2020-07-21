import React from "react";
import { connect } from "react-redux";

import { FIELDS } from "./SurveyForm";
import * as actions from "../../actions";
import { withRouter } from "react-router";
const renderReviewContent = (values) => {
  return FIELDS.map(({ name, label }) => (
    <div key={name}>
      <label>{label}</label>
      <p>{values[name]}</p>
    </div>
  ));
};
const SurveyFormReview = ({ onCancel, values, sendSurvey, history }) => (
  <div>
    <h3 className="center">Please confirm your entries</h3>
    <div>{renderReviewContent(values)}</div>
    <button onClick={onCancel} className="orange left btn-flat white-text">
      Back
    </button>
    <button
      onClick={() => sendSurvey(values, history)}
      className="green right btn-flat white-text"
    >
      Send<i className="material-icons right">email</i>
    </button>
  </div>
);
const mapStateToProps = ({
  form: {
    surveyForm: { values },
  },
}) => {
  return { values };
};
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
