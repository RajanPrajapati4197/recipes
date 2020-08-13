import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Hagimaru',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      ingredints: [ 'pogo', 'cable', 'power' ],
    },
    {
      id: 'r2',
      title: 'maggi',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
      ingredints: [ 'maggi', 'water', 'maggi masala' ],
    },
    {
      id: 'r3',
      title: 'Doreamon',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
      ingredints: [ 'maggi', 'water', 'maggi masala' ],
    },
  ];

  constructor() { }

  getallRecipes(){
    return [...this.recipes]; 
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe =>{
        return recipe.id === recipeId; 
      }),
    };
  }

}
