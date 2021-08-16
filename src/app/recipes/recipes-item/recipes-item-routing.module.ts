import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesItemPage } from './recipes-item.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesItemPageRoutingModule {}
