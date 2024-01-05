import { Component } from '@angular/core';
import { EmbroideryComponent } from '../embroidery/embroidery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EmbroideryComponent],
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

}
