import express from 'express'
import UserM from '../models/user';
import PorudzbinaM from '../models/order'

export class GetController{


    user_by_korime = (req: express.Request, res: express.Response)=>{
        let usernameP = req.body.username
        UserM.findOne({username: usernameP}).then((user)=>{
            res.json(user)
        }).catch((err)=>{
            console.log(err)
        })
    }

    /*get_active_orders = (req: express.Request, res: express.Response)=>{
        let korime = req.body.korime
        PorudzbinaM.find({kupac: korime, status: 1}).then((user)=>{
            res.json(user)
        }).catch((err)=>{
            console.log(err)
        })
    }

    archive_orders = (req: express.Request, res: express.Response)=>{
        let korime = req.body.korime
        PorudzbinaM.find({kupac: korime, status: 2})
        .sort({vreme_dostave : -1})
        .then((user)=>{
            res.json(user)
        }).catch((err)=>{
            console.log(err)
        })
    }*/

}