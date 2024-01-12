import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent {
  public firstName = signal('John')
  public lastName = signal('Doe')

  public fullName = computed(() => {
    return this.firstName() + ' ' + this.lastName()
  })

  public array = signal<number[]>([])

  public updateFirstName(value: string) {
    this.firstName.set(value)
  }

  public updateLastName(value: string) {
    this.lastName.set(value)
  }

  public updateArray() {
    this.array.update((prevValue) => {
      return [...prevValue, prevValue.length + 1]
    })
  }
}
