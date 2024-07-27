import express from 'express'
import { UpdateController } from '../controllers/update.controller'

const updateRouter = express.Router()

updateRouter.route("/change_password").post(
    (req,res)=>new UpdateController().change_password(req,res)
)

updateRouter.route("/accept_offer").post(
    (req,res)=>new UpdateController().accept_offer(req,res)
)

updateRouter.route("/reject_offer").post(
    (req,res)=>new UpdateController().reject_offer(req,res)
)

updateRouter.route("/deliver_order").post(
    (req,res)=>new UpdateController().deliver_order(req,res)
)

updateRouter.route("/reviewed").post(
    (req,res)=>new UpdateController().review(req,res)
)

export default updateRouter;