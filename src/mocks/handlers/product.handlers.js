import { http, HttpResponse } from "msw";
import { products } from "../data/products";

export const productHandlers = [
  http.get("/products", ({ request }) => {
    const url = new URL(request.url);

    const search = url.searchParams.get("search") || "";
    const page = Number(url.searchParams.get("page")) || 1;
    const limit = Number(url.searchParams.get("limit")) || 10;

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );

    const total = filteredProducts.length;

    const start = (page - 1) * limit;
    const end = start + limit;

    const items = filteredProducts.slice(start, end);

    return HttpResponse.json({
      items,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  }),
  http.post("/products", async ({ request }) => {
    const body = await request.json();

    const newProduct = {
      id: products.length + 1,
      ...body,
    };

    products.push(newProduct);

    return HttpResponse.json(newProduct, {
      status: 201,
    });
  }),
];
