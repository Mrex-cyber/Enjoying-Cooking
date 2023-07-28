import { DifficultLevels } from "src/difficultLevels.enum";
import { KindOfFood } from "./kindOfFood.enum";

export interface ICooking {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  nearestCost: number;
  price: number;
}
