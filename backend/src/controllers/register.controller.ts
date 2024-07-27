import express from 'express'
import KorisnikM from '../models/user';

function incrementCharacters(str: string) {
    return str.split('').map(char => {
      let code = char.charCodeAt(0);
      let shiftedCode = code + 1;
      return String.fromCharCode(shiftedCode);
    }).join('');
}

export class RegisterController{

    register = async (req: express.Request, res: express.Response)=>{
        let usernameP = req.body.username;
        let passwordP = req.body.password;
        let nameP = req.body.name;
        let surnameP = req.body.surname;
        let questionP = req.body.question;
        let answerP = req.body.answer;
        let addressP = req.body.address;
        let contactP = req.body.contact;
        let mailP = req.body.mail;
        let typeP = req.body.type;
        let profileP = req.body.profile_pic;

        passwordP = incrementCharacters(passwordP)
        
        let user = {
            username: usernameP,
            password: passwordP,
            question: questionP,
            answer: answerP,
            name: nameP,
            surname: surnameP,
            address: addressP,
            contact: contactP, 
            mail: mailP,
            profile_pic: profileP,
            type: typeP
        };
        
        const existingUser = await KorisnikM.findOne({
            $or: [
                { username: usernameP },
                { mail: mailP }
            ]
        });

        if (existingUser){
            return res.json({ poruka: "Već postoji korisnik sa tim korisničkim imenom ili email adresom." });
        }

        await new KorisnikM(user).save().then(ok=>{
            res.json({poruka: "ok"})
        }).catch(err=>{
            console.log(err)
        })
        
    }

    update_photo = async (req: express.Request, res: express.Response)=>{
        let usernameP = req.body.username
        let profileP = req.body.path

        KorisnikM.updateOne({username: usernameP}, {profile_pic: profileP}).then(ok=>{
            res.json({poruka: "ok"})
        }).catch((err)=>{
            console.log(err)
            res.json({poruka: "Fail"})
        })
    }
}