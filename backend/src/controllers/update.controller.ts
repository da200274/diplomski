import express from 'express'
import KorisnikM from '../models/user';
import PorudzbinaM from '../models/order'

function incrementCharacters(str: string) {
    return str.split('').map(char => {
      let code = char.charCodeAt(0);
      let shiftedCode = code + 1;
      return String.fromCharCode(shiftedCode);
    }).join('');
}

export class UpdateController{

    change_password = (req: express.Request, res: express.Response)=>{
        let korimeP = req.body.korime
        let lozinkaP = req.body.lozinka

        console.log(lozinkaP)
        lozinkaP = incrementCharacters(lozinkaP)
        console.log(lozinkaP)

        KorisnikM.updateOne({korime: korimeP}, {lozinka: lozinkaP}).then((ok)=>{
            res.json({poruka: "ok"})
        }).catch((err)=>{
            console.log(err)
        })
    }

    accept_offer = (req: express.Request, res: express.Response)=>{
        let korimeP = req.body.korime
        let idP = req.body.id
        let vremeP = req.body.vreme_dostave
        PorudzbinaM.updateOne({_id: idP}, {status: 1, konobar: korimeP, vreme_dostave: vremeP}).then((ok)=>{
            res.json({poruka: "ok"})
        }).catch((err)=>{
            console.log(err)
        })
    }

    reject_offer = (req: express.Request, res: express.Response)=>{
        let idP = req.body.id
        PorudzbinaM.deleteOne({_id: idP}).then((ok)=>{
            res.json({poruka: "ok"})
        }).catch((err)=>{
            console.log(err)
        })
    }

    deliver_order = (req: express.Request, res: express.Response)=>{
        let idP = req.body.id
        PorudzbinaM.updateOne({_id: idP}, {status: 2}).then((ok)=>{
            res.json({poruka: "ok"})
        }).catch((err)=>{
            console.log(err)
        })
    }

    review = (req: express.Request, res: express.Response)=>{
        /*let idR = req.body.id
        let komentar = req.body.komentar
        let ocena = req.body.ocena
        RezervacijaM.updateOne({_id: idR}, { komentar: komentar, ocena: ocena}).then((ok)=>{
            res.json({poruka: "ok"})
        }).catch((err)=>{
            console.log(err)
        })*/
    }

}