import { createTransport } from 'nodemailer';
import { config } from 'dotenv';

// Charger les variables d'environnement depuis le fichier .env
config();
// Configuration de Nodemailer
const transporter = createTransport({
    host: 'smtp.office365.com', // Hotmail/Outlook SMTP server
     port: 587,
     secure: false, // Use TLS
     auth: {
       user: "horizontransports-victoire@hotmail.com",
       pass:"V&aj161127"
     },
     tls: {
       ciphers: 'SSLv3'
     },
     debug: true // Enable debug mode
   });
   
   console.log('Email User:', process.env.EMAIL_USER);
   console.log('Email Pass:', process.env.EMAIL_PASS ? 'Loaded' : 'Not Loaded');
   
   const sendForm = (req, res) => {
     const { firstName, email, message } = req.body;
   
     const mailOptions = {
       from: "horizontransports-victoire@hotmail.com",
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
   };

   export default sendForm