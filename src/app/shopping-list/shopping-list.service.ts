import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatos", 10)
  ];

  constructor() {}

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next([...this.ingredients]);
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next([...this.ingredients]);
  }
}
