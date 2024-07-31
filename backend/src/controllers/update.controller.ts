import express from 'express'
import UserM from '../models/user';
import OrderM from '../models/order'

function incrementCharacters(str: string) {
    return str.split('').map(char => {
      let code = char.charCodeAt(0);
      let shiftedCode = code + 1;
      return String.fromCharCode(shiftedCode);
    }).join('');
}

export class UpdateController{

    change_password = (req: express.Request, res: express.Response)=>{
        let usernameP = req.body.username
        let passwordP = req.body.password

        passwordP = incrementCharacters(passwordP)

        UserM.updateOne({username: usernameP}, {password: passwordP}).then((ok)=>{
            res.json({message: "ok"})
        }).catch((err)=>{
            console.log(err)
        })
    }

    accept_order = (req: express.Request, res: express.Response)=>{
        let idP = req.body.id
        let statusP = req.body.status
        OrderM.updateOne({_id: idP}, {status: statusP}).then((ok)=>{
            res.json({message: "ok"})
        }).catch((err)=>{
            console.log(err)
        })
    }

    reject_order = (req: express.Request, res: express.Response)=>{
        let idP = req.body.id
        let statusP = req.body.status
        OrderM.updateOne({_id: idP}, {status: statusP}).then((ok)=>{
            res.json({message: "ok"})
        }).catch((err)=>{
            console.log(err)
        })
    }

    review = (req: express.Request, res: express.Response)=>{
        /*let idR = req.body.id
        let komentar = req.body.komentar
        let ocena = req.body.ocena
        RezervacijaM.updateOne({_id: idR}, { komentar: komentar, ocena: ocena}).then((ok)=>{
            res.json({message: "ok"})
        }).catch((err)=>{
            console.log(err)
        })*/
    }

}