import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ChangeDataService } from 'src/app/services/change-data.service';
import { FetchService } from 'src/app/services/fetch.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit{
  constructor(
     private router: Router,
     private updateServis: ChangeDataService, 
     private registerServis: RegisterService,
     private fetchServis: FetchService
    ){}
  ngOnInit(): void {
    let temp = localStorage.getItem("profile")
    if(temp) this.curr_korime = temp
    else return
    this.fetchServis.user_by_korime(temp).subscribe(
      user=>{
        if(user){
          this.k = user;
        }
      }
    )
  }

  onFileSelected(event: any): void {
    this.file = event.target.files[0] as File;

    this.file_constraints();

    this.loadImagePreview();
  }
  
  file_constraints(): void {
    console.log(this.file)
    if (this.file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          const width = img.width;
          const height = img.height;
          const fileSize = this.file!.size;
          
          if (width >= 100 && width <= 300 && height >= 100 && height <= 300) {
            this.message = '';
          } 
          else if(fileSize > 3 * 1024 * 1024) {
            this.message = 'Veličina slike moraju biti veličine manje od 3MB!';
          }
        };
      };

      reader.readAsDataURL(this.file);
    }
  }

  loadImagePreview(): void {
    if (this.file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.image_preview = e.target.result;
      };

      reader.readAsDataURL(this.file);
    }
  }

  async izmeni(i: number){
    this.data = { korime: this.curr_korime};
    switch (i) {
      case 1:
        this.data.podatak = this.username;
        this.data.kolona = 'username';
        this.username = ""
        break;
      case 2:
        this.data.podatak = this.question;
        this.data.kolona = 'question';
        break;
      case 3:
        this.data.podatak = this.answer;
        this.data.kolona = 'answer';
        break;
      case 4:
        this.data.podatak = this.name;
        this.data.kolona = 'name';
        this.name = ""
        break;
      case 5:
        this.data.podatak = this.surname;
        this.data.kolona = 'surname';
        this.surname = ""
        break;
      case 6:
        this.data.podatak = this.address;
        this.data.kolona = 'address';
        this.address = ""
        break;
      case 7:
        this.data.podatak = this.contact;
        this.data.kolona = 'contact';
        this.contact = ""
        break;
      case 8:
        await this.send_photo()

        this.data.podatak = this.profile_pic;
        this.data.kolona = 'profile_pic';
        this.file = null //ovo dodato

        break;
    }
    
    this.updateServis.change(this.data).subscribe(
      msg=>{
        if(msg.message == "ok"){
          if(i == 1){
            localStorage.clear()
            this.router.navigate(['login'])
          }
          this.reinicijalizuj(msg.korisnik);
        }
      }
    )
  }

  reinicijalizuj(kor: any){
    
    localStorage.setItem("user", JSON.stringify(kor))
    this.k = kor
    
  }

  send_photo(): Promise<void>{
    return new Promise((resolve, reject) => {
      if (this.file != null) {
        this.registerServis.file_upload(this.file).subscribe(
          data => {
            if (data.message != "not ok") {
              this.profile_pic = data.message;
            } else {
              this.message = "Neuspešno dodavanje slike!";
            }
            resolve();
          },
          error => {
            console.error(error);
            this.message = "Greška prilikom dodavanja slike!";
            reject(error);
          }
        );
      } else {
        this.profile_pic = 'default.png';
        resolve();
      }
    });
  }


  image_preview: string = ""
  file: File|null = null;


  username: string = "";
  question: string = "";
  answer: string = "";
  name: string = "";
  surname: string = "";
  address: string = "";
  contact: string = "";
  profile_pic: string = "";
  type: string = "";

  data: any;
  k: User = new User()

  curr_korime: string = ""

  message: string = ""
}