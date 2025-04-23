import express from 'express'
import { instrumentRouter } from './routes/instruments/instruments.routes.js';

const app = express();
app.use(instrumentRouter);

app.listen(3000,()=>{
    console.log('Listening at http://localhost:3000');
})