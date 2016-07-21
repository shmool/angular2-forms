import { Component } from '@angular/core';
import { DemoTemplateFormComponent } from '../demo-template-form';
import { DemoModelFormComponent } from '../demo-model-form';

@Component({
  moduleId: module.id,
  selector: 'sj-demo-container',
  directives: [DemoTemplateFormComponent, DemoModelFormComponent],
  styles: [`
    .demo-page {
      border: 1px solid #5bc0de;
      padding: 20px;
    }
    
    .btn-tab {
      border-radius: 4px 4px 0 0;
    }
  `],
  template: `
    <div class="container">
      <h1>Form of Art: Angular 2 Forms</h1>
      <!-- TODO: replace with routes -->
      <button class="btn btn-tab" [ngClass]="{'btn-info': route === 'template'}" (click)="goTo('template')">template-driven</button>
      <button class="btn btn-tab" [ngClass]="{'btn-info': route === 'model'}" (click)="goTo('model')">model-driven</button>
      <div class="demo-page">
        <sj-demo-template-form *ngIf="route === 'template'"></sj-demo-template-form>
        <sj-demo-model-form *ngIf="route === 'model'"></sj-demo-model-form>
      </div>
    </div>
  `,
})

export class DemoContainerComponent {

  route = 'template';

  goTo(route) {
    this.route = route;
  }

}
