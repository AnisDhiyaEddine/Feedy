import React from "react";
import { Link } from "react-router-dom";
import SurveysList from "./surveys/SurveysList";
export const Dashboard = () => (
  <div>
    <h2 className="center">Hi there !</h2>
    <SurveysList />
    <div className="fixed-action-btn">
      <Link to="/surveys/new" className="btn-floating btn-large red">
        <i className="large material-icons">add</i>
      </Link>
    </div>
  </div>
);

export default Dashboard;
