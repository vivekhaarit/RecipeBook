import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe;
  id: number;
  
  constructor(private recipeService: RecipeService,
      private router: ActivatedRoute){}

  ngOnInit(): void {
    this.router.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
      });
    this.recipe = this.recipeService.getRecipeById(this.id);

  }



  sendRecipeIngredientsToShoppingList(recipe:Recipe){
    this.recipeService.sendRecipeIngredientsToShoppingList(this.recipe.ingredients);
  }
}
