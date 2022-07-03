
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html'
})
export class ShoppingListEditComponent implements OnInit {
  name='';
  amount='';
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddClick(){
    let ingredient = new Ingredient(this.name, parseInt(this.amount));
    this.reset();
    return this.shoppingListService.addIngredient(ingredient);
  }
  onDeleteClick(){

  }
  onClearClick(){

  }
  reset(){
    this.name='';
    this.amount='';
  }

}
