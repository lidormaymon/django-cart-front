import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router) {}

  logOut():void {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
      console.log('User logged out');
      this.router.navigate(['login'])
    }else {
      alert('You\'re not logged in')
    }
  }
}
