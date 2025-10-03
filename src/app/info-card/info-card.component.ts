import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
}
