import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeAlreadySelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'http://localhost:4200/assets/images/recipe.jpg'
    ),
    new Recipe(
      'New test Recipe',
      'This is another test',
      'http://localhost:4200/assets/images/recipe.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(theRecipe: Recipe) {
    this.recipeAlreadySelected.emit(theRecipe);
  }
}
