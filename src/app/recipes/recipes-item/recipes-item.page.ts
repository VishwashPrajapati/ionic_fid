import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Dish } from 'src/app/shared/dish';



@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.page.html',
  styleUrls: ['./recipes-item.page.scss'],
})
export class RecipesItemPage implements OnInit {
  loadedDish;

  constructor(private activeRoute: ActivatedRoute,private serv: AppService) { }

  ngOnInit() {
    console.log('recipes item loaded');
    this.activeRoute.paramMap.subscribe(data => {
      if(!data.has('id')){
        return;
      }
      const recipeId = data.get('id');
     this.loadedDish = Array(this.serv.getRecipesById(recipeId));
     console.log(this.loadedDish);
    });



  }

}
