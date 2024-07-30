import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePipe } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UpdateDataComponent } from './components/update-data/update-data.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AddProductComponent } from './components/worker/add-product/add-product.component';
import { SweetsListComponent } from './components/customer/sweets-list/sweets-list.component';
import { ProductComponent } from './components/customer/product/product.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"profile", component:ProfilComponent},
  {path:"update_data", component:UpdateDataComponent},
  {path:"change_password", component:ChangePasswordComponent},
  {path:"add_product", component:AddProductComponent},
  {path:"sweets", component:SweetsListComponent},
  {path:"product", component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [DatePipe],
  exports: [RouterModule]
})
export class AppRoutingModule { }
