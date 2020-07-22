import React from "react";
import { Link } from "react-router-dom";
export const Thanks = () => (
  <div>
    <h1 className="center">Thanks for voting</h1>

    <h4 className="center">
      {" "}
      Would you like to use our service ! SignUp for free
    </h4>
    <div className="center">
      {" "}
      <a href="/auth/google">Login With Google</a>
    </div>
  </div>
);
export default Thanks;
