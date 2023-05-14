import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm:FormGroup = new FormGroup({
    'email':new FormControl(null , [Validators.email , Validators.required]),
    'password':new FormControl(null , [Validators.required])
  });
  
  constructor(private _AuthService:AuthService , private _Router:Router) { }
  errorMessage:any;
  
  flag:boolean =false;



  getLoginInfo(loginForm:any)
  {
    if(loginForm.valid == true){
      // this._AuthService.login(loginForm.value).subscribe((data)=>{
      //   if (data.message == 'success') {
          this._AuthService.saveCurrentUser("data.user.first_name" , "data.user.last_name" , "data.user.email" , "data.token")
          this._Router.navigate(['/home'])
        // }
        // else{
        //   this.flag = true;
        //   this.errorMessage = data.message;
        // }

      // })
    }else{
      this.flag = true;
    }
    
  }


  ngOnInit(): void {
  }

}
