const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.USER_NAME, process.env.PASSWORD);

const transporter = nodemailer.createTransport({
  host: 'smtp.postmarkapp.com',
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: 'sebin@missionreadyhq.com',
  to: 'sebin@missionreadyhq.com',
  html: `<h1>This is in the email body. I am using <em>HTML</em></h1>`,
  subject: 'Test Email 007',
};

transporter.sendMail(mailOptions);
