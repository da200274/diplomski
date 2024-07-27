import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router: Router, private loginServis: LoginService){}

  login(){
    if(this.username == "" || this.password == ""){
      this.message = "Niste uneli sve podatke";
      return;
    }
    this.loginServis.login(this.username, this.password).subscribe(
      data=>{
        if(data == null){
          this.message = "Ne postoji takav korisnik!"
        }
        else{
          localStorage.setItem("type", data.type);
          localStorage.setItem("user", JSON.stringify(data))
          this.router.navigate(['profile'])
        }
      }
    )
  }

  password_forgotten(){
    this.router.navigate(['change_password'])
  }

  register_page(){
    this.router.navigate(['register']);
  }

  username: string = ""
  password: string = ""
  message: string = ""
}
