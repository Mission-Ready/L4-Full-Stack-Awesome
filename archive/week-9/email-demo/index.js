const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.postmarkapp.com',
  port: 587,
  auth: {
    user: 'df02163a-cf40-4eff-bfc3-f2d7171193d8',
    pass: 'df02163a-cf40-4eff-bfc3-f2d7171193d8',
  },
});

const mailOptions = {
  from: 'yourEmail@missionreadyhq.com',
  to: 'sebin@missionreadyhq.com',
  subject: 'Hello Nodemailer',
  text: 'This is a test email sent using PostMarkApp service.',
};

transporter
  .sendMail(mailOptions)
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
