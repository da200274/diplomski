import express from 'express'
import { InsertController } from '../controllers/insert.controller'

const insertRouter = express.Router()

insertRouter.route("/order").post(
    (req,res)=>new InsertController().add_order(req,res)
)

insertRouter.route("/product").post(
    (req,res)=>new InsertController().add_product(req,res)
)

insertRouter.route("/comment").post(
    (req,res)=>new InsertController().add_comment(req,res)
)

export default insertRouter;