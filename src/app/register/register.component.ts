import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    'first_name':new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    'last_name':new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    'email':new FormControl(null , [Validators.email , Validators.required]),
    'password':new FormControl(null , [Validators.required])
  });
  // Validators.pattern(/^[A-Z]/) ,
  constructor(private _AuthService:AuthService , private _Router:Router) { }
  

  flag:boolean =false;

  getRegisterInfo(registerForm:any)
  {
    if(registerForm.valid == true){
      this._AuthService.register(registerForm.value).subscribe((data)=>{
        if (data.message == 'success') {
          this._Router.navigate(['/login'])
        }
        else{
          this.flag = true
        }

      })
    } else{
      this.flag = true
    }
    
  }


  ngOnInit(): void {
  }

}
