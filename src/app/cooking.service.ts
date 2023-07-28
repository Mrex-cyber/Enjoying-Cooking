import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ICooking } from './ICooking';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class CookingService {
 private cookingsUrl = 'https://localhost:32768/';

 token : string = "";
 // , "Cache-Control": "public,max-age=600"
 httpOptions = {
  headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type' : 'application/json'})
  };

 constructor(private http: HttpClient) { }
 cookings: ICooking[] = [];

 getAllCookings(): Observable<ICooking[]>{
  this.httpOptions.headers = new HttpHeaders({ 'Accept': 'application/json', 'Content-Type' : 'application/json', 'Authorization': 'Bearer ' + this.token});
  return this.http.get<ICooking[]>(this.cookingsUrl + "getcookings" , this.httpOptions);
 }

 userSignIn(login: string, password: string) : Observable<string> {
  this.httpOptions.headers = new HttpHeaders({ 'Accept': 'application/json', 'Content-Type' : 'application/json'});
  return this.http.post<string>(this.cookingsUrl + "signin", JSON.stringify({email: login, password: password}), this.httpOptions);
 }
 userSignUp(userName: string, login: string, password: string) {
  this.httpOptions.headers = new HttpHeaders({ 'Accept': 'application/json', 'Content-Type' : 'application/json'});
  return this.http.post(this.cookingsUrl + "signup", {userName: userName, email: login, password: password}, this.httpOptions);
 }
logOut(){
  this.token = "";
}

}
