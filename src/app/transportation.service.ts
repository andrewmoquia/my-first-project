import { Injectable } from '@angular/core';
import { Foods } from './foods';

@Injectable({
  providedIn: 'root'
})

export class TransportationService {

  apple: Foods = {
    type: 'Fruit',
    name: 'Apple'
  };

  iceCream: Foods = {
    type: 'Dessert',
    name: 'Ice Cream'
  };

  menudo: Foods = {
    type: 'Meal',
    name: 'Menudo'
  };

  foods: Foods[] = [this.apple, this.iceCream, this.menudo];

  constructor() { };

  getFoods(){
    return this.foods;
  };

}
