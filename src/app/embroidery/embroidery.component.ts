import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Embroidery } from '../embroidery';

@Component({
  selector: 'app-embroidery',
  standalone: true,
  imports: [],
  template: `
   <section class="listing">
    <img class="listing-photo" [src]="embroidery.photo" alt="Exterior photo of {{embroidery.name}}">
    <h2 class="listing-heading">{{ embroidery.name }}</h2>
    <p class="listing-price">{{ embroidery.price}}, {{embroidery.available }}</p>
  </section>
  `,
  styleUrl: './embroidery.component.css'
})
export class EmbroideryComponent {
  @Input() embroidery!: Embroidery;
}
