import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { Request, Response } from 'express';

import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', routes);

app.use((req: Request, res: Response) => {
    res.status(404).json({error: 'Not Found'});
});

app.listen(process.env.PORT, () => console.log(`Servidor rodando...`));
