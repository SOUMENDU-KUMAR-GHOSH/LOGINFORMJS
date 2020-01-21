import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NgIf } from '@angular/common';
import { UserService } from '../user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LOGINComponent implements OnInit {
  loginform: FormGroup;
  uname: AbstractControl;
  psw: AbstractControl;

  constructor(
    //private spinner: NgxSpinnerService;
    private router: Router,
    private formbuilder: FormBuilder,
    private userService: UserService,
  ) {
    this.loginform = formbuilder.group({
      uname: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      psw: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });
    this.uname = this.loginform.controls['uname'];
    this.psw = this.loginform.controls['psw'];
  }



  ngOnInit() {
  }
  login() {

    console.log("Method Running................");
    if (this.loginform.value.uname && this.loginform.value.psw) {
      let sendData =
      {
        uname: this.loginform.value.uname,
        psw: this.loginform.value.psw
      }
      console.log('METHOD RUNNING........', sendData);
      let data = this.userService.login(sendData);
      this.router.navigate(['/HOME']);
    }

  }

}

