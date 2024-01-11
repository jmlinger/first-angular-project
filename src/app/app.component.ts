import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindindComponent } from './components/template/template-bindind/template-bindind.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindindComponent, TemplateVariablesComponent, TemplateControlFlowComponent],
  template: `
    <h1>Curso de Angular</h1>
    <div class="theme-red">
      <!-- <app-new-component /> -->
      <!-- <app-template-bindind /> -->
      <!-- <app-template-variables /> -->
      <app-template-control-flow/>
    </div>
  `,
})
export class AppComponent {}

// <router-outlet></router-outlet>
