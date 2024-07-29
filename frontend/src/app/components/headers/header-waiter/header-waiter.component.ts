import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-waiter',
  templateUrl: './header-waiter.component.html',
  styleUrls: ['./header-waiter.component.css']
})
export class HeaderWaiterComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    let korisnik = localStorage.getItem("user")
    if(korisnik){
      let temp = JSON.parse(korisnik)
      localStorage.setItem("profile", temp.username)
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

  goto_profile(){
    this.router.navigate(['profile']);
  }

  goto_change(){
    this.router.navigate(['change_password'])
  }

  goto_add(){
    this.router.navigate(['add_product'])
  }

  goto_offer(){
    this.router.navigate(['user_offers'])
  }
}
