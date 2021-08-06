const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRIDAPIKEY);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "official.aroraprateek@gmail.com",
      subject: "Welcome to Task Manager App.",
      text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    })
    .then(() => {
      console.log("Email Sent.");
    })
    .catch((error) => {
      console.log(error);
    });
};

const sendCancelationEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "official.aroraprateek@gmail.com",
      subject: "Sorry to see you go.",
      text: `GoodBye, ${name}. I hope to see you sometime soon again.`,
    })
    .then(() => {
      console.log("Email Sent.");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
