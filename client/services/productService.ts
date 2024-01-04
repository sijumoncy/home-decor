import { ICreateProductData } from "@/interface/manageproduct";
import axios from "axios";

async function createProductService(formData: FormData, token: string) {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    console.log({ formData });

    const resp = await axios.post(
      "http://127.0.0.1:8000/api/v1/product",
      formData,
      config
    );
    return { message: resp.data.message, data: resp.data.data, error: false };
  } catch (err: any) {
    if (err?.response?.status === 401) {
      return {
        message: err?.response?.data?.message || "authentication error",
        data: err,
        error: true,
      };
    } else if (err?.response?.status === 403) {
      return {
        message: err?.response?.data?.message || "permission denied",
        data: err,
        error: true,
      };
    } else if (err?.response?.status === 409) {
      return {
        message: err?.response?.data?.message || "Already Exist",
        data: err,
        error: true,
      };
    } else {
      return { message: err.message, data: err, error: true };
    }
  }
}

async function getProductsService(page: number, limit: number, token: string) {
  console.log("in get products call : ", page, limit);
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const resp = await axios.get(
      `http://127.0.0.1:8000/api/v1/product?page=${page}&limit=${limit}`,
      config
    );
    console.log("original : ", {resp});
    
    return { data: resp.data, error: false };

  } catch (err: any) {
    return { data: err, error: true };
  }
}

export { createProductService, getProductsService };
