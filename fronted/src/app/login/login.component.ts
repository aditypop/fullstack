import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../service/auth-service.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;


  constructor(private authService: AuthService,private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
    this.authService.login({ email: this.loginForm.value.email, password:  this.loginForm.value.password }).subscribe({
      next: () => {
        // Redirect to home page or desired route on successful login
        this.router.navigate(['/']);
      },
      error: (err) => {
        // Handle login error (e.g., display error message)
        console.error('Login error:', err);
      }
    });
  }
  }
}
