import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-customer',
  templateUrl: './header-customer.component.html',
  styleUrls: ['./header-customer.component.css']
})
export class HeaderCustomerComponent implements OnInit{

  constructor(private router: Router){}
  ngOnInit(): void {
    let user = localStorage.getItem("user")
    if(user){
      let temp = JSON.parse(user)
      localStorage.setItem("profile", temp.username)
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

  goto_profil(){
    this.router.navigate(['profile']);
  }

  goto_change(){
    this.router.navigate(['change_password'])
  }

  goto_sweets(type: string){
    localStorage.setItem("sweet_type", type)
    this.router.navigate(['sweets'])
  }

  goto_cart(){
    this.router.navigate(['cart'])
  }

}
