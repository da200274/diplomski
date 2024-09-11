import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router, private registerServis: RegisterService){}

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
          else if(fileSize > 5 * 1024 * 1024) {
            this.message = 'Veličina slike mora biti manja od 5MB!';
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

  login_page(){
    this.router.navigate(['login'])
  }

  registruj(){
    this.type = "customer"
    this.check_constraints();
    localStorage.setItem("korime", this.username);
    if(this.message == ""){
      this.registerServis.register_user(this.username, this.password, this.question, this.answer, this.name, this.surname,
        this.address, this.contact, this.mail, this.profile_pic, this.type).subscribe(
          data=>{
            if(data.message == "ok"){
              this.send_photo();
            }
            else {
              this.message = "Neuspešna registracija";
            }
          }
        )
    }
  }

  send_photo(){
    if(this.file != null ){
      this.registerServis.file_upload(this.file).subscribe(
        data=>{
          if(data.message != "not ok"){
            this.update_photo(data.message)
          }
          else{
            this.message = "Neuspešno dodavanje slike!";
          }
        }
      )
    }
    else{
      this.update_photo("default.png")
    }
  }

  update_photo(naziv: string){
    this.registerServis.update_photo(naziv, this.username).subscribe(
      data=>{
        if(data.message == "ok"){
          console.log("Uspešna registracija.");
          this.router.navigate(['login'])
        }
        else{
          this.message = "Neuspešno ažuriranje slike!";
        }
      }
    )
  }

  check_constraints(){
    const regex = /^[a-zA-Z0-9]+$/;
    if(!regex.test(this.password)){
      this.message = "Lozinka treba da sadrži samo slova i brojeve!"
      return;
    }
    else if(this.username == "" || this.mail == "" || this.question== "" || this.answer == ""){
      this.message = "Popunite sve podatke!"
      return;
    }
    else if(this.name == "" || this.surname == "" || this.address == "" || this.contact == ""){
      this.message = "Popunite sve podatke!"
      return;
    }
    this.message = "";
  }


  image_preview: string = ""
  file: File|null = null;


  username: string = "";
  password: string = "";
  mail: string = "";
  question: string = "";
  answer: string = "";
  name: string = "";
  surname: string = "";
  address: string = "";
  contact: string = "";
  profile_pic: string = "";
  type: string = "";

  message: string = ""

}
