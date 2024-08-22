import { getRandomId } from "../utils/generateRandomId";
import { FoodItem } from "./FoodItem";
import { Rating } from "./Rating";

export class Restaurant {
  private restaurantId: string;
  private restaurantName: string;
  private listOfServicePinCode: Set<string>;
  private rating: Rating;
  private foodItem: FoodItem;

  constructor(
    name: string,
    listOfServicePincode: string[],
    foodItemPrice: number,
    foodQuantity: number,
    foodName: string,
    foodRating: Rating
  ) {
    this.restaurantId = getRandomId();
    this.restaurantName = name;
    this.rating = new Rating();
    this.foodItem = new FoodItem(foodName);
    this.listOfServicePinCode = new Set(listOfServicePincode);
  }

  public updateQuantity(quantity: number) {
    const updatedQuantity = quantity + this.foodItem.getQuantity();
    this.foodItem.setQuantity(updatedQuantity);
  }

  public getRestaurantName(): string {
    return this.restaurantName;
  }

  public setRestaurantName(name: string) {
    this.restaurantName = name;
  }

  public getFoodItem(): FoodItem {
    return this.foodItem;
  }

  public placeOrder(quantity: number): boolean {
    /** Check for concurrancy case */
    if (quantity > this.foodItem.getQuantity()) {
      return false;
    }
    const updatedQuantity = this.foodItem.getQuantity() - quantity;
    this.foodItem.setQuantity(updatedQuantity);
    return true;
  }

  public isLocationServiceAble(pincode: string) {
    return this.listOfServicePinCode.has(pincode);
  }

  public addComment(rating: number, comment: string) {
    this.rating.addRatingAndComment(comment, rating);
  }

  public getRestaurantAvaragerating(): number {
    return this.rating.getAvarageRating();
  }
}
