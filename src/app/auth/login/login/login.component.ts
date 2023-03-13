import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/employe/employe/models/employe';
import { FonctionemployeService } from 'src/app/employe/employe/services/fonctionemploye.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  datas! : Employe;
  users: User = {
  
    email : '',
    password: ''
    }

    constructor(private employeService : FonctionemployeService , private router : Router){

    }

  login(){
    const user = this.employeService.getEmployes().subscribe((data : any) => {this.datas = data});

    if(this.datas?.email == this.users.email)
    {
      return location.href = "/dashboard";
    }
    return ( alert("Email ou mot de passe incorrect !"))

  }

}
