import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../interfaces/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent  implements OnInit{

  constructor(private _recipeService:RecipeService){}

  recipes:Recipe[] = [];


  ngOnInit(): void {
    this._recipeService.getRecipes().subscribe({
      next: (response) => {
        console.log(response.meals);
        this.recipes = response.meals;
      },
    });
      
  }

}
