import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser()
  }

  isAuthenticated() {
    return this.authService.isAuth
  }

  isAdmin() {
    if (this.user.authLevel === "admin") {
      return true
    } else {
      return false
    }
  }

  onLogout() {
    this.authService.logout()
  }

}
