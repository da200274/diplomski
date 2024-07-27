import express from 'express'
import OrderM from '../models/order';

export class InsertController{

    add_order = (req: express.Request, res: express.Response)=>{
        let order = req.body.order;

        new OrderM(order).save().then(ok=>{
            res.json({poruka: "ok"})
        }).catch(err=>{
            console.log(err)
        })
    }

}