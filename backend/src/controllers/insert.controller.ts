import express from 'express'
import OrderM from '../models/order';
import ProductM from '../models/product';
import NotificationM from '../models/notification'
import CommentM from '../models/comment'

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

        new OrderM(order).save().then(savedOrder=>{
            
            let n = "Porudžbina: " + savedOrder._id + ", status: " + savedOrder.status;
            let notification = {
                notification: n,
                seen: false,
                username: savedOrder.username,
                order_id: savedOrder._id
            }

            new NotificationM(notification).save().then(savedNotification=>{
                res.json({message: "Uspešno ste napravili porudžbinu u našoj poslastičarnici. <b>Pritisnite dugme Refresh<b> da biste videli notifikacije."})
            }).catch(err=>{
            console.log(err)
            })
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

    add_comment = (req: express.Request, res: express.Response)=>{
        let usernameP = req.body.username
        let commentP = req.body.comment
        let product_idP = req.body.product_id

        let comment = {
            username: usernameP,
            comment: commentP,
            product_id: product_idP
        }

        new CommentM(comment).save().then(ok=>{
            res.json({message: "ok"})
        }).catch(err=>{
            console.log(err)
        })
    }

}