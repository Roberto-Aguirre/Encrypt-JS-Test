import express from 'express'
import { instrumentRouter } from './routes/instruments/instruments.routes.js';
import { loginRouter } from './routes/login/login.routes.js';
import bodyParser from 'body-parser';

const app = express();
app.use(instrumentRouter);
app.use(loginRouter)
app.use(bodyParser.json())

app.listen(3000,()=>{
    console.log('Listening at http://localhost:3000');
})