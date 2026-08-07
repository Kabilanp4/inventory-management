import { http, HttpResponse } from "msw";
import { products } from "../data/products";

export const productHandlers = [
  http.get("/products", () => {
    return HttpResponse.json(products);
  }),
];
