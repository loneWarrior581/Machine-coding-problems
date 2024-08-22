import { User } from "./User";
import { FoodItem } from "./FoodItem";

export class Order {
  public orderId: string;
  public foodItem: FoodItem;
  public user: User;
}
