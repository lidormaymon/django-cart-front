import { Component, ViewChild, ElementRef  } from '@angular/core';

import { UsersService } from 'src/app/servers/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('displayMSG', { static: true }) displayMSG!: ElementRef;

  constructor(private user: UsersService, private router: Router) {}

  login_chk(username: string, pwd: string) {
    const data = {
      "username": username,
      "password": pwd
    };

    this.user.login(data).subscribe((res) => {
      localStorage.setItem('token', res.access);
      this.router.navigate(['/home'])

    }, (error) => {
      console.log('Login failed:', error);
      this.displayMSG.nativeElement.innerText = 'Invalid username or password'
      this.displayMSG.nativeElement.style.color = 'red'
    });
  }
}
