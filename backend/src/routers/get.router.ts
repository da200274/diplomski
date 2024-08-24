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

getRouter.route("/user_orders").post(
    (req,res)=>new GetController().user_orders(req,res)
)

getRouter.route("/notifications_for_username").post(
    (req,res)=>new GetController().notifications_for_username(req,res)
)

getRouter.route("/comments_by_product").post(
    (req,res)=>new GetController().comments_by_product(req,res)
)




export default getRouter;