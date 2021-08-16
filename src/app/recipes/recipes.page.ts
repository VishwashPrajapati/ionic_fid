import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  dishes: any =[];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.dishes = this.appService.getRecipes();
  }

}
