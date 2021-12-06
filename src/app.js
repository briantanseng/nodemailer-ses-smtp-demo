require("./env");
let nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  port: process.env.SES_SMTP_PORT,
  host: process.env.SES_SMTP_HOST,
  secure: true,
  auth: {
    user: process.env.SES_SMTP_USER,
    pass: process.env.SES_SMTP_PASS,
  },
  debug: true,
});

module.exports.sendMail = async (message) => {
  let mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: process.env.EMAIL_SUBJECT,
    html: message,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

this.sendMail("This is a test.");
