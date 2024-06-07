// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Vous pouvez utiliser d'autres services comme 'hotmail', 'yahoo', etc.
  auth: {
    user: 'votreemail@gmail.com',
    pass: 'votremotdepasse'
  }
});

app.post('/send', (req, res) => {
  const { firstName, email, message } = req.body;

  const mailOptions = {
    from: 'votreemail@gmail.com',
    to: 'votreemail@gmail.com',
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

app.listen(3001, () => {
  console.log('Serveur en cours d\'exécution sur le port 3001');
});
