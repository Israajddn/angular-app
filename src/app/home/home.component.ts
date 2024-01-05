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
    <app-embroidery></app-embroidery>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingLocation: Embroidery = {
    id: 9999,
    name: 'Embroidery1',
    price: 10,
    photo: `../assets/1.png`,
    available: true
  };

}
