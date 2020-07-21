const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let invalidEmails;
export default (emails) => {
  if (emails.length) {
    invalidEmails = emails
      .split(",")
      .map((email) => email.trim())
      .filter((email) => !re.test(email));
    return invalidEmails;
  }
  return [];
};
  