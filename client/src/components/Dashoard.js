import React from "react";
import { Link } from "react-router-dom";
import SurveysList from "./surveys/SurveysList";
import Payments from "./Payments";
export const Dashboard = () => (
  <div>
    <h2 className="center">Hi there !</h2>
    <SurveysList />
    <div className="fixed-action-btn">
      <Link
        to="/surveys/new"
        style={{ margin: "2px" }}
        className="btn-floating btn-large red"
      >
        <i className="large material-icons" title="Add Survey">
          add
        </i>
      </Link>
      <Payments />
    </div>
  </div>
);

export default Dashboard;
