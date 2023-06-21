import { Component } from '@angular/core';
import { UsersService } from 'src/app/servers/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private _user:UsersService){} 
  

  about() {
    this._user.about().subscribe(res => console.log(res)
    )
  }
  

}
