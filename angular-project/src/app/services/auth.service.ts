import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const AUTH_API = 'http://localhost:8080/windcenter/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // constructor(private http: HttpClient) {}

  // login(nom: string, password: string): Observable<any> {
  //   return this.http.post(
  //     AUTH_API + 'login',
  //     {
  //       nom,
  //       password,
  //     },
  //     httpOptions
  //   );
  // }

  // register(
  //   prenom: string,
  //   email: string,
  //   password: string,
  //   nom: string,
  //   tele: string
  // ): Observable<any> {
  //   return this.http.post(
  //     AUTH_API + 'user/save',
  //     {
  //       prenom,
  //       email,
  //       password,
  //       nom,
  //       tele,
  //     },
  //     httpOptions
  //   );
  // }
 // BASE_PATH: 'http://localhost:8080'
 USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

 email !: string;
 password !: string;

 constructor(private http: HttpClient) {

 }

//  authenticationService(username: string, password: string) {
//    return this.http.post(`http://localhost:8080/login`,
//      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
//        this.email = username;
//        this.password = password;
//        this.registerSuccessfulLogin(username, password);
//      }));
//  }


 login(email: string, password: string): Observable<any> {
  return this.http.post(`http://localhost:8080/signin`, {
    email,
    password
  }, httpOptions);
 
}

 createBasicAuthToken(username: String, password: String) {
   return 'Basic ' + window.btoa(username + ":" + password)
 }

 registerSuccessfulLogin(username: string, password: string) {
   sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
 }

//  logout() {
//    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
//    this.username  = null;
//    this.password = null;
//  }

 isUserLoggedIn() {
   let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
   if (user === null) return false
   return true
 }

 getLoggedInUserName() {
   let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
   if (user === null) return ''
   return user
 }
}
