import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Embroidery } from '../embroidery';

@Component({
  selector: 'app-embroidery',
  standalone: true,
  imports: [],
  template: `
    <p>
      embroidery works!
    </p>
  `,
  styleUrl: './embroidery.component.css'
})
export class EmbroideryComponent {
  @Input() embroidery!: Embroidery;
}
