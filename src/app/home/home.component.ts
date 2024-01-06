import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbroideryComponent } from '../embroidery/embroidery.component';
import { Embroidery } from '../embroidery';
import { EmbroiderysService } from '../embroiderys.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EmbroideryComponent],
  template: `
     <section>
    <form>
      <input type="text" placeholder="Filter by price">
      <button class="primary" type="button">Search</button>
    </form>
    </section>
  <section class="results">
    <app-embroidery *ngFor="let embroidery of embroideryList"
  [embroidery]="embroidery"></app-embroidery>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  embroideryList: Embroidery[] = [];
  embroiderysService: EmbroiderysService = inject(EmbroiderysService);

constructor() {
  this.embroideryList = this.embroiderysService.getAllEmbroideryPrices();
}

}
