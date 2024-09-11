import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDataService } from 'src/app/services/change-data.service';
import { InsertDataService } from 'src/app/services/insert-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent{


  constructor(private router: Router, 
    private insertDataServis: InsertDataService,
    private changeDataServis: ChangeDataService
  ){}

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
            this.message = 'Dimenzije slike moraju biti veličine manje od 3MB!';
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

  dodaj(){
    this.check_constraints();
    if(this.message == ""){
      this.insertDataServis.add_product(this.name, this.description, this.price, this.content, this.type).subscribe(
        msg=>{
          if(msg.message == "ok"){
            this.send_photo()
          }
          else {
            this.message = "Neuspešno dodavanje proizvoda";
          }
        }
      )
    }
  }

  send_photo(){
    if(this.file != null ){
      console.log(this.file)
      this.changeDataServis.file_upload(this.file).subscribe(
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

  update_photo(path: string){
    this.changeDataServis.update_photo(path, this.name, this.type).subscribe(
      data=>{
        if(data.message == "ok"){
          console.log("Uspešno dodavanje proizvoda.");
          this.router.navigate(['profile'])
        }
        else{
          this.message = "Neuspešno ažuriranje slike!";
        }
      }
    )
  }

  check_constraints(){
    if(this.name == "" || this.price <= 0 || this.description== "" || this.content == "" || this.type == ""){
      this.message = "Popunite sve podatke!"
      return;
    }
    this.message = "";
  }


  image_preview: string = ""
  file: File|null = null;

  name: string = ""
  description: string = ""
  price: number = 0
  content: string = ""

  picture: string = "";
  type: string = "";

  message: string = ""
}
