import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Pho Ha Noi',
          'Very delicious meal',
          'https://i.doanhnhansaigon.vn/2020/10/30/thumbnailpho-1604046389_750x0.jpg',
          [
            new Ingredient('Beef', 2),
            new Ingredient('Salad', 10)
          ]
        ),
        new Recipe(
          'Pizza',
          'I like pizza',
          'https://product.hstatic.net/1000389344/product/pizza_pepperoni-texgrill-haiphong_dbdf3c75f0a84d1bab2f7be8793dbd9c_master.jpg',
          [
            new Ingredient('Flour', 10),
            new Ingredient('Tomatoes', 2)
          ]
        ),
      ];
    
      getRecipes(): Recipe[] {
          return this.recipes.slice();
      }
}