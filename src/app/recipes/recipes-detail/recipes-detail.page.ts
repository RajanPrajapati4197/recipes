import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private recipesService:RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        return;
      }
      const recipeId=paramMap.get('recipeId');
      this.loadedRecipe=this.recipesService.getRecipe(recipeId);
    });
  }

}
