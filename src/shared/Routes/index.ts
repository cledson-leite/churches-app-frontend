import { Route } from "../types";
import { calendar } from "./calendar";
import { cells } from "./cells";
import { finance } from "./finance";
import { secretary } from "./secretary";

export const Routes: Route[] = [
  finance,
  secretary,
  cells,
  calendar
]