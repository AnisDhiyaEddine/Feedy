const passport = require("passport");
let url =
  process.env.NODE_ENV === "production" ? "https://feddy.herokuapp.com/" : "";
module.exports = (app) => {
  app.get(
    `/auth/google`,
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // callback route for google to redirect to
  app.get(
    `${url}/auth/google/callback`,
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
