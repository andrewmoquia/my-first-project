import { Component } from '@angular/core';
import { Foods } from './foods'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  firstName = "John";
  secondName = "Andrew";
  colors:string[] = ["Yellow", "Blue", "Orange"];

  getFullName() {
    return this.firstName + " " + this.secondName;
  };

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

  foods: Foods[ ] = [this.apple, this.iceCream, this.menudo];
}
