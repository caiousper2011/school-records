import { Component } from '@angular/core';
import { SelectionItemComponent } from './components/selection-item/selection-item.component';
import { log } from 'console';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [SelectionItemComponent],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss',
})
export class SelectionComponent {
  onSelectMode(mode: string): void {
    console.log(mode);
  }
}
