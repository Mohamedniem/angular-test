import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  login:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required]),

  })

  loginsubmit(){
    console.log(this.login.value);
  }


}
