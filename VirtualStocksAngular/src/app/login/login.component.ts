import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginArray = {
    username:"",
    password:""
  }
  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.loginUser(this.loginArray).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }
}
