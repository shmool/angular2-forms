import { Component } from '@angular/core';
import { DemoTemplateFormComponent } from './demo-template-form';

@Component({
  moduleId: module.id,
  selector: 'app',
  directives: [DemoTemplateFormComponent],
  template: `
    <h1>Form of Art: Angular 2 Forms</h1>
    <sj-demo-template-form></sj-demo-template-form>
    `,
})

export class AppComponent {
}
