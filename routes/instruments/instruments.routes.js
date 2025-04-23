import { Router } from "express";

const instrumentRouter = Router();

instrumentRouter.get('/', (req, res) => {
  res.send('Welcome to Intruments Land');
});

export {instrumentRouter}
