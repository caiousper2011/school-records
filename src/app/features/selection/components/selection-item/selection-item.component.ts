import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-selection-item',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './selection-item.component.html',
  styleUrl: './selection-item.component.scss',
})
export class SelectionItemComponent {}
