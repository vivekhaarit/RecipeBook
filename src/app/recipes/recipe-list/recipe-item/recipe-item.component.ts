import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 
  
  @ViewChild('recipeItem',{static:true}) recipeItem: ElementRef;
  @Input('recipe') recipe: Recipe;
  // @Output('recipeSelected') recipeSelected= new EventEmitter<Recipe>();
  
  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {  }

  // onRecipeItemClick(){
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
