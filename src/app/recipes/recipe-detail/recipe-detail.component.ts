import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipe') recipe : Recipe;
  

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
  }


  sendRecipeIngredientsToShoppingList(recipe:Recipe){
    this.recipeService.sendRecipeIngredientsToShoppingList(this.recipe.ingredients);
  }

}
