import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { reduxForm } from "redux-form";
export class SurveyNew extends Component {
  state = {
    review: false,
  };

  onSurveySubmit = () => {
    this.setState({ review: true });
  };

  onCancel = () => {
    this.setState({ review: false });
  };
  showForm = () => {
    if (this.state.review) {
      return <SurveyFormReview onCancel={this.onCancel} />;
    }
    return <SurveyForm onSurveySubmit={this.onSurveySubmit} />;
  };
  render() {
    return <div>{this.showForm()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
