import { Component, OnInit,NgModule } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  // isLoggedIn = false;
  // isLoginFailed = false;
  // errorMessage = '';
  // roles: string[] = [];

  errorMessage = 'Email ou mot de passe est incorrect';
  successMessage!: string;
  isLoginFailed = false;
  loginSuccess = false;
  roles: string[] = [];

  // constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }
   
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {   }

  // ngOnInit(): void {
  //   if (this.tokenStorage.getToken()) {
  //     this.isLoggedIn = true;
  //     this.roles = this.tokenStorage.getUser().roles;
  //   }
  // }

  ngOnInit() {
  }

  // onSubmit(): void {
  //   const { nom, password } = this.form;

  //   this.authService.login(nom, password).subscribe(
  //     data => {
  //       this.tokenStorage.saveToken(data.accessToken);
  //       this.tokenStorage.saveUser(data);

  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.roles = this.tokenStorage.getUser().roles;
  //       this.reloadPage();
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   );
  // }

  // reloadPage(): void {
  //   window.location.reload();
  // }


  handleLogin() {
    this.authenticationService.login(this.form.email, this.form.password)
    .subscribe((result)=> {
      console.log(result.roles);
      this.isLoginFailed = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      localStorage.setItem('userToken', result.accessToken);
      localStorage.setItem('userRole', result.roles)
      this.router.navigate(['/dashboard']);

      
    }, () => {
      this.isLoginFailed = true;
      this.loginSuccess = false;
    });      
  }
}
