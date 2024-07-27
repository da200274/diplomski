import express from 'express'
import UserM from '../models/user'

function incrementCharacters(str: string) {
    return str.split('').map(char => {
      let code = char.charCodeAt(0);
      let shiftedCode = code + 1;
      return String.fromCharCode(shiftedCode);
    }).join('');
}

export class LoginController{

    login_korisnik = (req: express.Request, res: express.Response)=>{
        let usernameP = req.body.username;
        let passwordP = req.body.password;

        passwordP = incrementCharacters(passwordP)
        
        UserM.findOne({username: usernameP, password: passwordP}).then((user)=>{
            res.json(user)
        }).catch((err)=>{
            console.log(err)
        })
    }
}