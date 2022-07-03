import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients:Ingredient[]=[
    new Ingredient("Potato",5),
    new Ingredient("Onion",1)
  ];

  addIngredient(ingredient:Ingredient){
    this.ingredients.unshift(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients);
  }

}