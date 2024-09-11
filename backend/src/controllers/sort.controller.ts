import express from 'express'
import OrderM from '../models/order';

export class SortController{

    sort = async (req: express.Request, res: express.Response)=>{
        let columnP = req.body.column
        let directionP = req.body.direction

        const sort_column = columnP || 'username';
        const sort_direction = directionP === 'desc' ? -1 : 1;

        const restaurants = await OrderM.find().sort({ [sort_column]: sort_direction });

        res.status(200).json(restaurants);
    }

}