import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Login';
  users = [];
  isAdmin: boolean = false;
  email = '';
  password = '';
  isLoggedIn = false;
  constructor(private appService: AppService) { }
  login() {
    this.appService.sendGetRequest(this.email, this.password).subscribe((data: any[]) => {
      this.isLoggedIn = true;
      if (data.length > 1) {
        this.isAdmin = true;
      }
      this.users = data;
    })
  }
}
