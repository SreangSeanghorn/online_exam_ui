import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent implements OnInit {
  meta_data={title:'WELCOME TO HRD REGISTRATION PORTAL',
  description:'HRD Registration Portal',
  } ;
 hidden :boolean = true;
  login() {
    this.hidden = !this.hidden;
  }

  ngOnInit() {
    // Initialization code here
  }
}
