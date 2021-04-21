import { Component } from '@angular/core';
import {TransportationService} from './transportation.service';
import { Foods } from './foods';

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
  }
  
}
