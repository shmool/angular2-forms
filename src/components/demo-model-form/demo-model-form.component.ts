import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'sj-demo-model-form',
  templateUrl: 'demo-model-form.component.html',
  styleUrls: ['demo-model-form.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class DemoModelFormComponent implements OnInit {

  userNameControl = new FormControl(
    '',
    [Validators.required, Validators.pattern('[A-Za-z ]{2,}')]);
  
  userEmailControl = new FormControl(
    'user@example.com', 
    [Validators.required, Validators.minLength(3), Validators.pattern('.+@.+')]);
  
  userDetailsGroup = new FormGroup({
    userName: this.userNameControl,
    userEmail: this.userEmailControl
  });
  
  userForm = new FormGroup({
    userDetails: this.userDetailsGroup
  });
  
  model = {};

  ngOnInit() {
    this.model = this.userForm.value;
  }

  emailHasError(emailControl) {
    return emailControl && emailControl.touched && !emailControl.valid;
  }

  submitForm() {
    this.model = this.userForm.value;
  }
}
