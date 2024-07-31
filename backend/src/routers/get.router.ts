import express from 'express'
import { GetController } from '../controllers/get.controller'

const getRouter = express.Router()


getRouter.route("/user_by_korime").post(
    (req,res)=>new GetController().user_by_korime(req,res)
)

getRouter.route("/products_by_type").post(
    (req,res)=>new GetController().product_by_type(req,res)
)

getRouter.route("/orders").post(
    (req,res)=>new GetController().orders(req,res)
)

export default getRouter;