import { Injectable } from '@angular/core';
import { Embroidery } from './embroidery';

@Injectable({
  providedIn: 'root'
})
export class EmbroiderysService {

  constructor() { }
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
  getAllEmbroideryPrices(): Embroidery[] {
    return this.embroideryList;
  }
  
  getEmbroideryPricesById(id: number): Embroidery | undefined {
    return this.embroideryList.find(Embroidery => Embroidery.id === id);
  }
}
