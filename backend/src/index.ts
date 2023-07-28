import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const firebaseConfig = {
    apiKey: process.env.APIKEY ,
    authDomain: process.env.AUTH,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.BUCKET,
    messagingSenderId:process.env.MESSAGE,
    appId: process.env.APPID,
    measurementId: process.env.MEASURMENT
  };

const app: Express = express();
app.use(cors());
const port:number =  parseInt(process.env.PORT || '4000');

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/getFirebase',(req: Request, res: Response) => {
    res.send(firebaseConfig);
  });

app.listen(port, () => { 
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});