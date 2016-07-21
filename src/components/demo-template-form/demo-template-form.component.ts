import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sj-demo-template-form',
  templateUrl: 'demo-template-form.component.html',
  styleUrls: ['demo-template-form.component.css']
})
export class DemoTemplateFormComponent {

  model = {
    userDetails: {
      userEmail: 'user@example.com'
    }
  };
  
  submitForm(formController) {
    this.model = formController.value;
  }

  emailHasError(emailControl) {
    return emailControl && emailControl.touched && !emailControl.valid;
  }

}
