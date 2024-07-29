import express from 'express'
import UserM from '../models/user';
import ProductM from '../models/product'

export class ChangeController{
    update_photo(req: express.Request, res: express.Response): void {
        console.log(req.body)
        let nameP = req.body.name
        let picP = req.body.path

        ProductM.updateOne({name: nameP}, {picture: picP}).then(ok=>{
            res.json({message: "ok"})
        }).catch((err)=>{
            console.log(err)
            res.json({message: "Fail"})
        })
    }

    change = (req: express.Request, res: express.Response)=>{
        const { podatak, kolona, korime } = req.body;

        if (!podatak || !kolona) {
            return res.status(400).json({ error: 'Kolona i podatak moraju postojati' });
        }

        const update: any = {};
        update[kolona] = podatak;

        UserM.findOneAndUpdate({username: korime}, update, { new: true })
            .then(updatedUser => {
                if (!updatedUser) {
                    return res.status(404).json({ error: 'User not found' });
                }
                res.json({korisnik:updatedUser, message: "ok"});
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });

    }

}