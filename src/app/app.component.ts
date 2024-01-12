import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
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
  imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindindComponent, TemplateVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewsComponent],
  template: `
    <h1>Curso de Angular</h1>
    <div class="theme-red">
      <!-- <app-new-component /> -->
      <!-- <app-template-bindind /> -->
      <!-- <app-template-variables /> -->
      <!-- <app-template-control-flow/> -->
      <app-template-deferrable-views/>
    </div>
  `,
})
export class AppComponent {}

// <router-outlet></router-outlet>
