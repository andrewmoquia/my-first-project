import { Component } from '@angular/core';
import {TransportationService} from './transportation.service';
import { Foods } from './foods';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

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

  foods: Foods[];

  constructor(private transportationService: TransportationService) {
    this.foods = this.transportationService.getFoods();
  };

  saySomething() {
    alert("Nothing to say actually");
  };

  counter: number = 0;

  increment(){
    this.counter += 1;
  }

  decrement(){
    this.counter -= 1;
  }

  phrase: string = "It's going ";

  addPhrase(){
    this.phrase += "...and going ";
  };

  resetPhrase(){
    this.phrase = "It's going ";
  };

  username!: string;
  newFoodName!: string;

  addFood(){
    if (!this.newFoodName) {
      alert("Empty field, fill out all the forms")
    } else {
      const addFood: Foods = {
        name: this.newFoodName
      }
      this.transportationService.addFood(addFood);
    }
  }

  removeItem(i:number) {
    this.transportationService.removeFood(i);
  }

}


