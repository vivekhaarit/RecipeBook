import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
  private recipies: Recipe[]=[
    new Recipe("vivek recipe","abc abc","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8swWkzgtlHIdnQ5U1bMp8FZbi1YRG36FqYg&usqp=CAU"),
    new Recipe("vikash recipe","slkdjlf lskdjf lksdj","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4KQ-zxPWL4Izh0ZX17mbFRD5gGmEOPAnaw&usqp=CAU"),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipies.slice();
  }
}