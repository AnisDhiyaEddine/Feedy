const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");
class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();
    this.from_email = new helper.Email("Feedy.team@gmail.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);
    this.sgApi = new sendgrid(keys.sendGridKey);

    this.addContent(this.body);
    this.addClickTraking();
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => new helper.Email(email));
  }
  addClickTraking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }
  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach((recipient) => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON(),
    });
    try {
      const response = await this.sgApi.API(request);
      console.log("called");
      return response;
    } catch (error) {
      console.log(error.response.body);
    }
  }
}

module.exports = Mailer;
