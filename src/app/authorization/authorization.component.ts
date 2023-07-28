import { Component, OnInit } from '@angular/core';
import { CookingService } from '../cooking.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  public isRegirtrated : boolean = true;

  constructor (private cookingService: CookingService) {}

  changeState(){
    this.isRegirtrated = !this.isRegirtrated;
  }

  signIn(email: string, password: string): void {
    this.cookingService.userSignIn(email, password).subscribe(token => this.cookingService.token = token);
  }
  signUp(userName: string, email: string, password: string): void {
    this.cookingService.userSignUp(userName, email, password).subscribe();
  }

  logOut(){
    this.cookingService.logOut();
  }

  ngOnInit() : void {

  }

}
