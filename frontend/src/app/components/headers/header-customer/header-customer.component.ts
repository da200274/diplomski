import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from 'src/app/models/notification';
import { FetchService } from 'src/app/services/fetch.service';
import { UpdateDataService } from 'src/app/services/update-data.service';

@Component({
  selector: 'app-header-customer',
  templateUrl: './header-customer.component.html',
  styleUrls: ['./header-customer.component.css']
})
export class HeaderCustomerComponent implements OnInit{

  constructor(
    private router: Router,
    private fetchServis: FetchService,
    private changeServis: UpdateDataService
  ){}

  ngOnInit(): void {
    this.initialize()
  }

  initialize(){
    let user = localStorage.getItem("user")
    if(user){
      let temp = JSON.parse(user)
      localStorage.setItem("profile", temp.username)
      this.username = temp.username
      this.get_notifications()
    }
  }

  get_notifications(){
    this.fetchServis.notifications_for_username(this.username).subscribe(
      notifications=>{
        if(notifications){
          this.notifications = notifications
        }
      }
    )
  }

  change_seen(notification: Notification, event: Event) {
    event.stopPropagation();
    
    if(notification.seen === false) {
      this.changeServis.change_seen(notification.notification).subscribe(
        message => {
          if(message.message === "ok") {
            this.get_notifications();
          }
        }
      );
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

  goto_orders(){
    this.router.navigate(['my_orders'])
  }

  notifications: Notification[] = []
  username: string = ""
}
