import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FetchService } from 'src/app/services/fetch.service';
import { UpdateDataService } from 'src/app/services/update-data.service';

function incrementCharacters(str: string) {
  return str.split('').map(char => {
    let code = char.charCodeAt(0);
    let shiftedCode = code + 1;
    return String.fromCharCode(shiftedCode);
  }).join('');
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})


export class ChangePasswordComponent implements OnInit{

  constructor(private updateServis: UpdateDataService, private fetchServis: FetchService, private router: Router){}

  ngOnInit(): void {
    this.inicijalizuj();
  }

  inicijalizuj(){
    let temp = localStorage.getItem("user")
    if(temp){
      this.user = JSON.parse(temp)
    }
  }

  odgovori1(){
    if(this.odgovor == ""){
      this.message = "Unesite odgovor."
      return
    }
    let cipher = incrementCharacters(this.odgovor)
    if(cipher == this.user.password){
      this.message = ""
      this.answered = true
    }else{
      this.message = "Pogrešna stara lozinka."
    }

  }

  promeni_lozinku(){
    if(this.new_password == ""){
      this.message="Unesite novu lozinku.";
      return
    }
    if(this.new_password != this.repeated_new_password){
      this.message="Lozinke moraju biti iste.";
      return
    }
    this.check_constraints()
    if(this.message == ""){
      this.updateServis.change_password(this.user.username, this.new_password).subscribe(
        msg=>{
          if(msg.message != "ok"){
          }
          else{
            localStorage.clear()
            this.router.navigate(['login'])
          }
        }
      )
    }
  }

  check_constraints(){
    const regex = /^[a-zA-Z0-9]+$/;
    if(!regex.test(this.repeated_new_password)){
      this.message = "Lozinka mora da se sastoji samo iz slova i brojeva."
      return;
    }
    this.message = ""
  }

  message: string = ""
  user: User = new User()
  odgovor: string = ""
  answered: boolean = false;
  new_password: string = ""
  repeated_new_password: string = ""
  prviDeo: boolean = false
}