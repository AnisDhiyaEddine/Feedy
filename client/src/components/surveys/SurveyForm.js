import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
export let FIELDS = [
  { label: "Survey title", name: "title" },
  { label: "Email body", name: "body" },
  { label: "Subject line", name: "subject" },
  { label: "Recipients", name: "recipients" },
];
export class SurveyForm extends Component {
  renderSurveyFields = () => (
    <div>
      {FIELDS.map((field) => (
        <Field
          key={field.name}
          {...field}
          type="text"
          component={SurveyField}
        />
      ))}
    </div>
  );

  render() {
    return (
      <div>
        <h4 className="center">Please enter your survey details</h4>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderSurveyFields()}

          <Link to="/surveys" className="red left btn-flat white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

let validate = (valuesObj) => {
  let errors = {};
  if (validateEmails(valuesObj.recipients || []).length) {
    errors.recipients = `These emails are invalid : ${validateEmails(
      valuesObj.recipients
    )}`;
  }

  FIELDS.forEach(({ name }) => {
    if (!valuesObj[name]) {
      errors[name] = "You must provide a value";
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
