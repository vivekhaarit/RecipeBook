import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";

export class ShoppingListService{
  private ingredients:Ingredients[]=[
    new Ingredients("Potato",5),
    new Ingredients("Onion",1)
  ];

  addIngredient(ingredient:Ingredients){
    this.ingredients.unshift(ingredient);
  }

  getIngredients(){
    return this.ingredients;
  }

}