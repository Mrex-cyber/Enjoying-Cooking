import { Component, OnInit } from '@angular/core';
import { ICooking } from 'src/app/ICooking';
import { CookingService } from 'src/app/cooking.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-cookings',
  templateUrl: './cookings.component.html',
  styleUrls: ['./cookings.component.css']
})
export class CookingsComponent implements OnInit {
  cookings: ICooking[] = [];

  public clickedCooking?: ICooking;

  constructor (private cookingService: CookingService) {}

  getCookings(): void {
    this.cookingService.getAllCookings().subscribe(cooks => this.cookings = cooks);
  }

  ngOnInit() : void {
    this.getCookings();
  }



}
