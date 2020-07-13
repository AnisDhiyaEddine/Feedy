const keys = require("../config/keys");
const auth = require("../middlewares/auth");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = async (app) => {
  app.post("/api/stripe", auth, async (req, res) => {
    try {
      let charge = await stripe.charges.create({
        amount: 500,
        currency: "eur",
        source: req.body.id,
        description: "5eur pour 5 crédits ",
      });
      req.user.credits += 5;
      let user = await req.user.save();
      res.send(user);
    } catch (error) {
      res.send(error);
    }
  });
};
