import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isRegister: boolean = false;

  toggleSignUp() {
    this.isRegister = this.isRegister ? false : true;
  }
}
