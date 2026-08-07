import httpClient from "../../../services/http/axios";

export const getProducts = async (params = {}) => {
  const response = await httpClient.get("/products", {
    params,
  });
  return response.data;
};
