import { Component } from '@angular/core';
import { UsersService } from 'src/app/servers/users.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private user: UsersService) {}


  add(username:string, pwd:string ) {
    const data = {
      "username":username,
      "password":pwd
    }
    this.user.createUser(data).subscribe((res) => console.log(res));
    console.log('sucess');
  }
}
