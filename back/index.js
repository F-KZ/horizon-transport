
import express from 'express';
import cors from 'cors';
import sendForm from './routes/formulaire.js';

const app = express();
app.use(express.json());

const allowedOrigins = [
  'https://horizon-transports-main-ekk9c26a2-fkz.vercel.app',
  'https://horizon-transports-contact.vercel.app',
  'https://www.horizontransports.fr'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Handle preflight requests for /send
app.options('/send', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(204);
});

// Routes
app.use('/send', sendForm);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
