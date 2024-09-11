import express from 'express'
import { UpdateController } from '../controllers/update.controller'

const updateRouter = express.Router()

updateRouter.route("/change_password").post(
    (req,res)=>new UpdateController().change_password(req,res)
)

updateRouter.route("/change_status").post(
    (req,res)=>new UpdateController().change_status(req,res)
)

updateRouter.route("/change_seen").post(
    (req,res)=>new UpdateController().change_seen(req,res)
)



export default updateRouter;