import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private roter:Router){

  }


  userObj:any={

    username:'',
    password:''

  }

  onLogin(){
    if(this.userObj.username=='arun' && this.userObj.password=='12345'){
      this.roter.navigateByUrl('dashboard');
    }else{
      alert('userName and password is incorrect');
    }

  }

}
