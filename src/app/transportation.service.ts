import { Injectable } from '@angular/core';
import { Foods } from './foods';

@Injectable({
  providedIn: 'root'
})

export class TransportationService {

  food1: Foods = {
    name: 'Apple'
  };

  food2: Foods = {
    name: 'Ice Cream'
  };

  food3: Foods = {
    name: 'Menudo'
  };

  foods: Foods[] = [this.food1, this.food2, this.food3];

  constructor() { };

  getFoods(){
    return this.foods;
  };

  addFood(addedFood: Foods) {
    this.foods.push(addedFood)
  }

  removeFood(i: number){
    this.foods.splice(i, 1)
  }
}
