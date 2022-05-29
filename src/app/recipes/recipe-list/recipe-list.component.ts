import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipe[]=[
    new Recipe("vivek recipe","abc abc","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8swWkzgtlHIdnQ5U1bMp8FZbi1YRG36FqYg&usqp=CAU"),
    new Recipe("vikash recipe","slkdjlf lskdjf lksdj","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4KQ-zxPWL4Izh0ZX17mbFRD5gGmEOPAnaw&usqp=CAU"),
  ];

  @Output('recipeRecieved') recipeRecieved= new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelction(recipe:Recipe){
    return this.recipeRecieved.emit(recipe);
  }

}
