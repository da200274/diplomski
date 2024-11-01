import { Component } from '@angular/core';
import { HeaderVisitorComponent } from './components/headers/header-visitor/header-visitor.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderCustomerComponent } from './components/headers/header-customer/header-customer.component';
import { HeaderWaiterComponent } from './components/headers/header-waiter/header-waiter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  getHeaderComponent(): any {
    const userRole = localStorage.getItem("type");
    switch (userRole) {
      case 'customer':
        return HeaderCustomerComponent;
      case 'worker':
        return HeaderWaiterComponent
      default:
        return HeaderVisitorComponent;
    }
  }

  getFooterComponent():any{
    return FooterComponent
  }
}
