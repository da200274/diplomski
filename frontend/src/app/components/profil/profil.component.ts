import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FetchService } from 'src/app/services/fetch.service';
import { UpdateDataService } from 'src/app/services/update-data.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{

  constructor(private router: Router, private fetchServis: FetchService, private updateDataServis: UpdateDataService){}
  ngOnInit(): void {
    let temp = localStorage.getItem("profile")
    let tip = localStorage.getItem("type")
    if(temp && tip){
      this.username = temp
      this.type = tip
      this.fetchServis.user_by_korime(this.username).subscribe(
        user=>{
          if(user){
            this.k = user
            this.fetched = true
          }
        }
      )
    }
  }

  update_data(){
    this.router.navigate(["update_data"])
  }

  
  change_password(){
    this.router.navigate(["change_password"])
  }

  username: string = ""
  type: string = ""
  k: User = new User()
  fetched: boolean = false;

}
