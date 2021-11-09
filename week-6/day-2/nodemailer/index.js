const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    auth: {
        user: process.env.EMAIL, 
        pass: process.env.EMAIL_PASSWORD
    }
})

const mailOptions = {
    from: "jade@missionreadyhq.com",
    to: 'jadeldik@gmail.com', 
    subject: 'Test',
    text: 'This is a test'
}

transporter.sendMail(mailOptions)