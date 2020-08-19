import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private recipesService:RecipesService,private router:Router,private altctr: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        this.router.navigate(['recipes']);
        return;
      }
      const recipeId=paramMap.get('recipeId');
      this.loadedRecipe=this.recipesService.getRecipe(recipeId);

      if(!this.loadedRecipe.id){
        this.router.navigate(['recipes']);
      }

    });
  }

  async onDeleteClick(){

    const alert = await this.altctr.create({
      header: 'Are you sure?',
      message: 'Are you sure delete this reciepe',
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler:()=>{
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['recipes']);
          }
        }
      ]
    });
    await alert.present();
  }

}
