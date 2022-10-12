const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.postmarkapp.com',
  port: 587,
  auth: {
    user: '_____',
    pass: '',
  },
});

const mailOptions = {
  from: '_____@missionreadyhq.com',
  to: 'sebin@missionreadyhq.com',
  subject: 'Test Email 007',
  text: 'This is in the email body',
};

transporter.sendMail(mailOptions);
