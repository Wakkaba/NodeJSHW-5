const mailer = require("nodemailer");

const { EMAIL, PASSWORD } = require("../../config/emailConfig");

module.exports = async email => {
  let transport = mailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD
    }
  });

  await transport.sendMail({
    to: email,
    from: EMAIL,
    html: "hello form LUN!",
    subject: "Test message",
    text: "TEXT HELLO LO LO LO"
  });
};
