import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredients[]=[
    new Ingredients("Potato",5),
    new Ingredients("Onion",1)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addToShoppingList(ingredient:Ingredients){
    this.ingredients.unshift(ingredient);
  }

}
