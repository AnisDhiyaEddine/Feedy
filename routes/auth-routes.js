const passport = require("passport");
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // callback route for google to redirect to
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("http://localhost:3000");
    }
  );

  app.get("/auth/logout", (req, res) => {
    let user = req.user;
    req.logout();
    res.status(200).send(user);
  });
};
