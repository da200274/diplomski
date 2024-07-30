import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderVisitorComponent } from './components/headers/header-visitor/header-visitor.component';
import { HeaderCustomerComponent } from './components/headers/header-customer/header-customer.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderWaiterComponent } from './components/headers/header-waiter/header-waiter.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UpdateDataComponent } from './components/update-data/update-data.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AddProductComponent } from './components/worker/add-product/add-product.component';
import { PaginationComponent } from './components/customer/pagination/pagination.component';
import { SweetsListComponent } from './components/customer/sweets-list/sweets-list.component';
import { ProductComponent } from './components/customer/product/product.component';
import { CartComponent } from './components/customer/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderVisitorComponent,
    HeaderCustomerComponent,
    LoginComponent,
    RegisterComponent,
    HeaderWaiterComponent,
    FooterComponent,
    ProfilComponent,
    UpdateDataComponent,
    ChangePasswordComponent,
    AddProductComponent,
    PaginationComponent,
    SweetsListComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
