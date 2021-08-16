import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesItemPageRoutingModule } from './recipes-item-routing.module';

import { RecipesItemPage } from './recipes-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesItemPageRoutingModule
  ],
  declarations: [RecipesItemPage]
})
export class RecipesItemPageModule {}
