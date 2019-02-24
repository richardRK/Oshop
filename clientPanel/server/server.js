const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path')

// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());


//const api = require('./routes/api');

app.use(express.static(__dirname + '/dist'));

const transporter = nodemailer.createTransport({

  host: 'smtp.gmail.com',
  provider: 'gmail',
  port: 587,
  ssl:     true,
  //secure: true,
  auth: {
    user: 'varma36a@gmail.com', // Enter here email address from which you want to send emails
    pass: 'sai##1886' // Enter here password for email account from which you want to send emails
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.use(bodyParser.json());

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/send', function (req, res) {

  let senderName = req.body.contactFormName;
  let senderEmail = req.body.contactFormEmail;
  let messageSubject = req.body.contactFormSubjects;
  let messageText = req.body.contactFormMessage;
  let copyToSender = req.body.contactFormCopy;

  let mailOptions = {
    to: ['rohit36a@gmail.com'], // Enter here the email address on which you want to send emails from your customers
    from: senderName,
    subject: messageSubject,
    text: messageText,
    replyTo: senderEmail
  };

  if (senderName === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (senderEmail === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (messageSubject === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (messageText === '') {
    res.status(400);
    res.send({
      message: 'Bad request'
    });
    return;
  }

  if (copyToSender) {
    mailOptions.to.push(senderEmail);
  }

  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log('Message sent: ', response);
      res.end('sent');
    }
  });
});

app.listen(port, function () {
  console.log('Express started on port: ', port);
});
