import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindindComponent } from './components/template/template-bindind/template-bindind.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindindComponent],
  template: `
    <h1>Curso de Angular</h1>
    <div class="theme-red">
      <app-new-component />
      <app-template-bindind />
    </div>
  `,
})
export class AppComponent {}

// <router-outlet></router-outlet>
