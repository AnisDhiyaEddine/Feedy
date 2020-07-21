import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

export class SurveysList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href="#">Yes: {survey.yes || 0}</a>
            <a href="#">No: {survey.no || 0}</a>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => ({ surveys });
export default connect(mapStateToProps, actions)(SurveysList);
