import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-bindind',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-bindind.component.html',
  styleUrl: './template-bindind.component.scss'
})
export class TemplateBindindComponent {
  public name = "John Doe"
  public age = 32
  public condition = this.age > 1 ? 'test' : 'test2'
  public isDisabled = true
  public srcValue = 'https://digimon.shadowsmith.com/img/myotismon.jpg'
  public sum (parm1: number, parm2: number) {
    return parm1 + parm2
  }

  constructor() {
    setTimeout(() => {
      this.name = "João e Maria"
    }, 2000);
  }
}
