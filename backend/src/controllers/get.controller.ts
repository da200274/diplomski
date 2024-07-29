import express from 'express'
import UserM from '../models/user';
import PorudzbinaM from '../models/order'
import ProductM from '../models/product'

export class GetController{


    user_by_korime = (req: express.Request, res: express.Response)=>{
        let usernameP = req.body.username
        UserM.findOne({username: usernameP}).then((user)=>{
            res.json(user)
        }).catch((err)=>{
            console.log(err)
        })
    }

    product_by_type = (req: express.Request, res: express.Response)=>{
        let typeP = req.body.type
        ProductM.find({type: typeP}).then((products)=>{
            res.json(products)
        }).catch((err)=>{
            console.log(err)
        })
    }

}