import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 
  
  @ViewChild('recipeItem',{static:true}) recipeItem: ElementRef;
  @Input('recipe') recipe: Recipe;
  @Output('recipeSelected') recipeSelected= new EventEmitter<Recipe>();
  
  ngOnInit(): void {  }

  onRecipeItemClick(){
    this.recipeSelected.emit(this.recipe);
  }

}
