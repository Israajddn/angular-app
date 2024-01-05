import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbroideryComponent } from '../embroidery/embroidery.component';
import { Embroidery } from '../embroidery';

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

  embroideryList: Embroidery[] = [
    {
    id: 0,
    name: 'Flower Embroidery - Navy Blue',
    price: "$10",
    photo: `../assets/1.png`,
    available: "available",
  },
  {
    id: 1,
    name: 'Flower Embroidery - Turquoise',
    price: "$20",
    photo: `../assets/2.png`,
    available: "available",
  },
  {
    id: 2,
    name: 'Flower Embroidery - Beige',
    price: "$15",
    photo: `../assets/3.png`,
    available: "available",
  }];

}
