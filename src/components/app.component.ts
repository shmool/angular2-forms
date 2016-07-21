import { Component } from '@angular/core';
import { DemoContainerComponent } from './demo-container';

@Component({
  moduleId: module.id,
  selector: 'app',
  directives: [DemoContainerComponent],
  template: `<sj-demo-container></sj-demo-container>`,
})

export class AppComponent {

  route = 'template';

  goTo(route) {
    this.route = route;
  }

}
