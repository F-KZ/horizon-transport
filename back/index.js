
import express from 'express';
import cors from 'cors';
import sendForm from './routes/formulaire.js';

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://horizon-transport-back.vercel.app',
  methods: ["POST", "GET", "OPTIONS"],
  credentials: true
}));

// Handle preflight requests for /send
app.options('/send', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://horizon-transport-back.vercel.app');
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
  console.log(`adresse du serveur http://localhost:${PORT}/`);
});
