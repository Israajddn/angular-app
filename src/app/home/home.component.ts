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
      <input type="text" placeholder="Filter by color" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
    </section>
  <section class="results">
    <app-embroidery *ngFor="let embroidery of filteredEmbroideryList"
  [embroidery]="embroidery"></app-embroidery>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  embroideryList: Embroidery[] = [];
  filteredEmbroideryList: Embroidery[] = [];
  embroiderysService: EmbroiderysService = inject(EmbroiderysService);

constructor() {
  this.embroideryList = this.embroiderysService.getAllEmbroideryPrices();
  this.filteredEmbroideryList = this.embroideryList;
}
filterResults(text: string) {
  if (!text) {
    this.filteredEmbroideryList = this.embroideryList;
    return;
  }

  this.filteredEmbroideryList = this.embroideryList.filter(
    embroidery => embroidery?.color.toLowerCase().includes(text.toLowerCase())
  );
}

}
