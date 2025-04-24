import { Router } from "express";
import { loginUser, registerUser } from "../../app/services/password.service.js";

const loginRouter = Router()


loginRouter.post("/login",loginUser)
loginRouter.post("/register",registerUser)

export { loginRouter}