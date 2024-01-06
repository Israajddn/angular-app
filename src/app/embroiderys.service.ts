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
    color:'navy blue',
    price: "$10",
    photo: `../assets/1.png`,
    available: "available",
    description:'The embroidery kit for beginners adults is designed with printed pattern, which is easy for hand embroidery kit beginner to learn the needlework and makes the needlepoint project very easy to finish. Come with English instructions and teach you how to deal with the funny embroidery set, suitable for beginners.',
  },
  {
    id: 1,
    name: 'Flower Embroidery - Turquoise',
    color:'turquoise',
    price: "$20",
    photo: `../assets/2.png`,
    available: "available",
    description:'The embroidery kit for beginners adults is designed with printed pattern, which is easy for hand embroidery kit beginner to learn the needlework and makes the needlepoint project very easy to finish. Come with English instructions and teach you how to deal with the funny embroidery set, suitable for beginners.',
  },
  {
    id: 2,
    name: 'Flower Embroidery - Beige',
    color:'beige',
    price: "$15",
    photo: `../assets/3.png`,
    available: "available",
    description:'The embroidery kit for beginners adults is designed with printed pattern, which is easy for hand embroidery kit beginner to learn the needlework and makes the needlepoint project very easy to finish. Come with English instructions and teach you how to deal with the funny embroidery set, suitable for beginners.',
  }];
  getAllEmbroideryPrices(): Embroidery[] {
    return this.embroideryList;
  }
  
  getEmbroideryPricesById(id: number): Embroidery | undefined {
    return this.embroideryList.find(Embroidery => Embroidery.id === id);
  }
}
