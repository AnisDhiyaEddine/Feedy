module.exports = (req, res, next) => {
  if (!req.user.credits) {
    res.status(403).send({ error: "Purchase some credits" });
  }
  next();
};
