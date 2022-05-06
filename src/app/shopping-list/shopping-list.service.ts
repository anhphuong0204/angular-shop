import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  onIngredientAdd(ing: Ingredient) {
      this.ingredients.push(ing);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }

  onIngredientsAdd(ing: Ingredient[]) {
    this.ingredients.push(...ing);
}

  getIngredients() {
      return this.ingredients.slice();
  }
}
