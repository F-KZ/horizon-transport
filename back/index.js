
import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import sendForm from './routes/formulaire.js';


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());



// Routes
app.use('/send', sendForm)


app.get('/', (req, res) => {
    res.send('Api is running...')
})



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}/`);;
});
