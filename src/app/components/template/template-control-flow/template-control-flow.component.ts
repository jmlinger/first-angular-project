import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [
    AsyncPipe, NgIf, NgFor
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

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000))

  public trackByFn(index:number) {
    return index
  }

  public itens: Array<{name: string}> = []

  public addNewName(value: string) {
    console.log(this.itens);
    return this.itens.push({name: value})

  }

}
