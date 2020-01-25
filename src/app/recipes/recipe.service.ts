import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://cdn.pixabay.com/photo/2018/07/29/22/39/bread-3571266_960_720.jpg",
      [new Ingredient("Apple", 1), new Ingredient("Tomato", 2)]
    ),
    new Recipe(
      "Second Test Recipe",
      "This is second simply a test",
      "https://cdn.pixabay.com/photo/2018/05/30/19/18/burger-3442227_960_720.jpg",
      [new Ingredient("Potato", 3), new Ingredient("Strawberry", 4)]
    )
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: number) {
    return [...this.recipes][id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
