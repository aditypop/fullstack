import { Component } from '@angular/core';
import { AuthService } from '../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public authService: AuthService,public router: Router) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    // Redirect or perform any other necessary actions after logout
  }
}
