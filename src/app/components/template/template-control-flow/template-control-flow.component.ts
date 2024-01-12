import { AsyncPipe, CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

interface ItensI {
  name: string
}

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [
    AsyncPipe, NgIf, NgFor, NgSwitch, FormsModule, NgSwitchCase, NgSwitchDefault
  ],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateControlFlowComponent implements OnInit, AfterViewInit, OnDestroy{
  constructor(){
    console.log('test1');
  }
  ngOnInit(): void {
    console.log('test2');
  }
  ngAfterViewInit(): void {
    console.log('test3');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  public isTrue = true === true

  public itens: Array<ItensI> = []

  public loadingData$: Observable<Array<ItensI>> = of(this.itens).pipe(delay(3000))

  public trackByFn(index:number) {
    return index
  }

  public addNewName(value: string) {
    console.log(this.itens);
    return this.itens.push({name: value})
  }

  public options: string[] = ["", "A", "B", "C"]

  public selectedOption = ''

}
