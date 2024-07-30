import express from 'express'
import OrderM from '../models/order';
import ProductM from '../models/product'

export class InsertController{

    add_order = (req: express.Request, res: express.Response)=>{
        let usernameP = req.body.username;
        let priceP = req.body.price
        let contentP = req.body.content
        let statusP = "poslato"

        let order = {
            username: usernameP,
            price: priceP,
            content: contentP,
            status: statusP
        }

        new OrderM(order).save().then(ok=>{
            res.json({message: "ok"})
        }).catch(err=>{
            console.log(err)
        })
    }

    add_product = (req: express.Request, res: express.Response)=>{
        let nameP = req.body.name
        let priceP = req.body.price
        let descriptionP = req.body.description
        let contentP = req.body.content
        let pictureP = req.body.picture
        let typeP = req.body.type

        let product = {
            name: nameP,
            price: priceP,
            description: descriptionP,
            content: contentP,
            picture: pictureP,
            type: typeP
        }

        new ProductM(product).save().then(ok=>{
            res.json({message: "ok"})
        }).catch(err=>{
            console.log(err)
        })
    }

}