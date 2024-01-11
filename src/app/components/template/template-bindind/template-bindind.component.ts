import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-bindind',
  standalone: true,
  imports: [CommonModule, FormsModule, NgClass],
  templateUrl: './template-bindind.component.html',
  styleUrl: './template-bindind.component.scss'
})
export class TemplateBindindComponent {
  public name = "John Doe"
  public age = 32
  public condition = this.age > 1 ? 'test' : 'test2'
  public isDisabled = this.age > 32 ? true : false
  public srcValue = 'https://digimon.shadowsmith.com/img/myotismon.jpg'
  public isTextDecoration = this.age >= 32 ? 'underline' : 'none'
  public sum () {
    return this.age++
  }

  public sub () {
    return this.age--
  }

  constructor() {
    setTimeout(() => {
      this.name = "João e Maria"
    }, 2000);
  }

  public onKeyDown(event: Event){
    return console.log(event);

  }

  public mousePositionX = 0
  public mousePositionY = 0

  public onMouseMove(event: MouseEvent){
    this.mousePositionX = event.clientX
    this.mousePositionY = event.clientY
  }
}
