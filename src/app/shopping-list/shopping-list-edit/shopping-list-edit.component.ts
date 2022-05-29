
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  name='';
  amount='';
  @Output() shoppingListElement = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddClick(){
    let ingredient = new Ingredients(this.name, parseInt(this.amount));
    this.reset();
    return this.shoppingListElement.emit(ingredient);
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
