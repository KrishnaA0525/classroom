import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem("userLoggedIn");
    sessionStorage.removeItem("users");
  }

  submitLogin(loginData: NgForm): void {
    sessionStorage.setItem("userLoggedIn", "true");
    this.router.navigate(["dashboard"]);
  }

}
