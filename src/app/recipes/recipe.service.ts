import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
 
  private recipies: Recipe[]=[
    new Recipe(
      "vivek recipe",
      "abc abc",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8swWkzgtlHIdnQ5U1bMp8FZbi1YRG36FqYg&usqp=CAU",
      [
        new Ingredient('alu',2),
        new Ingredient('tamatar',2)
      ],
      ),
    new Recipe("vikash recipe",
    "slkdjlf lskdjf lksdj",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4KQ-zxPWL4Izh0ZX17mbFRD5gGmEOPAnaw&usqp=CAU",
      [
        new Ingredient('toast powder',5),
        new Ingredient('besan',4)
      ],
    ),
  ];

  constructor(private shoppingListService: ShoppingListService){}

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipies.slice();
  }

  getRecipeById(id: number) {
    return this.recipies[id];
  }

  sendRecipeIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}