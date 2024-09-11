import express from 'express'
import UserM from '../models/user';
import OrderM from '../models/order'
import ProductM from '../models/product'
import NotificationM from '../models/notification'
import CommentM from '../models/comment'

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

    orders = (req: express.Request, res: express.Response)=>{
        OrderM.find()
        .sort({created_at: -1})
        .then((orders)=>{
            res.json(orders)
        }).catch((err)=>{
            console.log(err)
        })
    }

    user_orders = (req: express.Request, res: express.Response)=>{
        let usernameP = req.body.username
        OrderM.find({username: usernameP})
        .sort({created_at: -1})
        .then((orders)=>{
            res.json(orders)
        }).catch((err)=>{
            console.log(err)
        })
    }

    notifications_for_username = (req: express.Request, res: express.Response) => {
        let usernameP = req.body.username;
    
        let two_weeks_ago = new Date();
        two_weeks_ago.setDate(two_weeks_ago.getDate() - 14);
    
        NotificationM.find({
            username: usernameP,
            created_at: { $gte: two_weeks_ago }  // Only fetch notifications from the last 2 weeks
        })
        .sort({ created_at: -1 })
        .then((notifications) => {
            res.json(notifications);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Error fetching notifications" });
        });
    };
    

    comments_by_product = (req: express.Request, res: express.Response)=>{
        let product_idP = req.body.product_id
        CommentM.find({product_id: product_idP})
        .sort({created_at: 1})
        .then((comments)=>{
            res.json(comments)
        }).catch((err)=>{
            console.log(err)
        })
    }

}