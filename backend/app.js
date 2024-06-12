import dotenv from 'dotenv';
import cors from 'cors';
import spotifyRouter from 'spotifyRouter.js';
import express from 'express';
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/spotify', spotifyRouter);

const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


