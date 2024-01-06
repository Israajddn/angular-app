import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Embroidery } from '../embroidery';
import { EmbroiderysService } from '../embroiderys.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  template: `
   <article>
    <img class="listing-photo" [src]="embroidery?.photo"
      alt="Exterior photo of {{embroidery?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{embroidery?.name}}</h2>
      <p class="listing-price">{{embroidery?.price}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this embroidery</h2>
      <ul>
        <li>color: {{embroidery?.color}}</li>
        <li>Description: {{embroidery?.description}}</li>
      </ul>
    </section>
  </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  embroiderysService = inject(EmbroiderysService);
  embroidery: Embroidery | undefined;

  constructor() {
    const embroideryId = Number(this.route.snapshot.params['id']);
    this.embroidery = this.embroiderysService.getEmbroideryPricesById(embroideryId);
  }

}
