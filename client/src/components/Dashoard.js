import React from "react";
import { Link } from "react-router-dom";
export const Dashboard = () => (
  <div>
    <h2 className="center">Hi there this is the dashboard !!</h2>
    <div className="fixed-action-btn">
      <Link to="/surveys/new" className="btn-floating btn-large red">
        <i className="large material-icons">add</i>
      </Link>
    </div>
  </div>
);

export default Dashboard;
