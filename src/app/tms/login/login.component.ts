import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userFormGroup! : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group(
      {
        username : this.formBuilder.control(null),
        password : this.formBuilder.control(null)
      }
    )
  }

  handleLogin() {

  }
}
