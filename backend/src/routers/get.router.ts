import express from 'express'
import { GetController } from '../controllers/get.controller'

const getRouter = express.Router()


getRouter.route("/user_by_korime").post(
    (req,res)=>new GetController().user_by_korime(req,res)
)


export default getRouter;