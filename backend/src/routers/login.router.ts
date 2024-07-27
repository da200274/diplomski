import express from 'express'
import { LoginController } from '../controllers/login.controller'

const loginRouter = express.Router()

loginRouter.route("/login").post(
    (req,res)=>new LoginController().login_korisnik(req,res)
)

export default loginRouter;