import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  private ingredients:Ingredients[]=[
    new Ingredients("Potato",5),
    new Ingredients("Onion",1)
  ];

  addIngredient(ingredient:Ingredients){
    this.ingredients.unshift(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients(){
    return this.ingredients.slice();
  }

}