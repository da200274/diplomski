import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertDataService } from 'src/app/services/insert-data.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit{

  constructor(
    private router: Router,
    private insertServis: InsertDataService
  ){}

  ngOnInit(): void {
    this.initialize()
  }

  initialize(){
    this.get_user()
    this.get_product()
  }

  get_user(){
    let temp = localStorage.getItem("user")
    if(temp){
      this.username = JSON.parse(temp).username
    }
  }

  get_product(){
    let temp = localStorage.getItem("product")
    if(temp){
      this.product_id = JSON.parse(temp)._id
    }
  }

  add_comment(){
    this.insertServis.add_comment(this.username, this.product_id, this.comment).subscribe(
      msg=>{
        if(msg.message == "ok"){
          this.router.navigate(['product'])
        }
      }
    )
  }

  username: string = "";
  product_id: string = ""
  message: string = ""
  comment: string = "";
}

