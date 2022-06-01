const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "kolodnydan@gmail.com",
    subject: "Thank you for joining in",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendGoodByeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "kolodnydan@gmail.com",
    subject: "Sorry to see you leave",
    text: `Sorry ${name} to see you leave is there anything we could have done to keep you onboard ??,`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodByeEmail,
};
