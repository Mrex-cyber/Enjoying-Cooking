import { Component, OnInit } from '@angular/core';
import { CookingsComponent } from '../cookings/cookings.component';
import { ICooking } from '../ICooking';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  cooking: ICooking = {
    id: "Id",
    title: "Title",
    description: "Description",
    difficulty: "Difficulty",
    nearestCost: 0,
    price: 0,
  }

  constructor () {}


  ngOnInit() : void {
  }
}
