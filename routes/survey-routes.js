// to avoid mongoose when we repeat imports .. test env
const mongoose = require("mongoose");
const Survey = mongoose.model("surveys");
const auth = require("../middlewares/auth");
const checkCredits = require("../middlewares/checkCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const { Path } = require("path-parser");
const { URL } = require("url");
const _ = require("lodash");
module.exports = (app) => {
  app.get("/api/surveys", async (req, res) => {
    let surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });
    res.send(surveys);
  });

  app.post("/api/surveys", auth, checkCredits, async (req, res) => {
    let { title, body, subject, recipients } = req.body;
    let survey = new Survey({
      title,
      body,
      subject,
      recipients: recipients.split(",").map((email) => ({
        email: email.trim(),
      })),
      _user: req.user.id,
      dateSent: Date.now(),
    });
    let mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      if (req.user.credits) {
        await mailer.send();
        await survey.save();
        req.user.credits -= 1;
        let user = await req.user.save();
        res.send(user);
      }
      res.status(403).send(req.user);
    } catch (error) {
      res.status(422).send(error);
    }
  });

  app.post("/api/surveys/webhook", (req, res) => {
    let extractor = new Path("/api/surveys/:surveyID/:choice");

    _.chain(req.body)
      .map(({ url, email }) => {
        let match = extractor.test(new URL(url).pathname);
        if (match) {
          return { ...match, email };
        }
      })
      .compact()
      .uniqBy("email", "surveyID")
      .each(({ surveyID, email, choice }) => {
        console.log(email);
        Survey.updateOne(
          {
            _id: surveyID,
            recipients: { $elemMatch: { email: email, clicked: false } },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.clicked": true },
            lastResponded: new Date(),
          }
        ).exec();
      })
      .value();

    res.send({});
  });
};
