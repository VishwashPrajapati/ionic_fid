import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getRecipes(){
    return DISHES;
  }
  getRecipesById(data){
    return DISHES.find(x => x.id === data);
  }
}
