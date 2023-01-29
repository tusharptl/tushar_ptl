import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username!:string;
  password!:string;
  users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];
  errorMessage = '';
  form!: { value: { username: any; password: any; }; };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){

    if (this.username == 'admin' && this.password == '123' ) {
      console.log("correct");
      this.router.navigateByUrl('home');
    } else {
      this.router.navigateByUrl('login');
    }
  }
}