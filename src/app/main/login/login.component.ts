import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isRegister: boolean;
  public loginForm: FormGroup;

  constructor( private formBuilder: FormBuilder, private router: Router ) {
    this.isRegister = false;

    this.loginForm = this.formBuilder.group(
      {
        username: '',
        password: '',
        email: ''
      }
    )
  }

  public login(): void {
    alert('logou')
    this.router.navigate(['hub']);
  }
}
