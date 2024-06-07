// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
 host: 'smtp.office365.com', // Hotmail/Outlook SMTP server
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    ciphers: 'SSLv3'
  },
  debug: true // Enable debug mode
});

console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS ? 'Loaded' : 'Not Loaded');

app.post('/send', (req, res) => {
  const { firstName, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: `${email}`,
    subject: 'Nouveau message du formulaire',
    text: `Nom Complet: ${firstName}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message envoyé avec succès !');
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
