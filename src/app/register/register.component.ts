import { Component } from '@angular/core';
import {User} from './userregister';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {

  hiddenForm: boolean = true;
  hiddenButton: boolean = false;
  registerButton() {
    this.hiddenForm = !this.hiddenForm;
    this.hiddenButton = !this.hiddenButton;
  }
  register(user: User) {
    console.log('User Registered');
    console.log(user);
    return user;
  }
  onSubmit() {
   
    console.log('User Registered');
  }
}
