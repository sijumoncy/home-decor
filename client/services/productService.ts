import { ICreateProductData } from "@/interface/manageproduct";
import { IgetProductFilter } from "@/interface/productService";
import axios from "axios";

async function createProductService(formData: FormData, token: string) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

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

async function updateProductService(
  formData: FormData,
  token: string,
  productId: string
) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const resp = await axios.put(
      `http://127.0.0.1:8000/api/v1/product/${productId}`,
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
    } else if (err?.response?.status === 404) {
      return {
        message: err?.response?.data?.message || "product not found",
        data: err,
        error: true,
      };
    } else {
      return { message: err.message, data: err, error: true };
    }
  }
}

async function getProductsService(
  page: number,
  limit: number,
  token: string,
  filter?: IgetProductFilter
) {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    let URL = `http://127.0.0.1:8000/api/v1/product?page=${page}&limit=${limit}`;
    const catgStr =
      filter?.category && filter?.category?.length > 0
        ? filter?.category?.join(",")
        : "";
    if (catgStr) {
      URL += `&category=${catgStr}`;
    }
    const resp = await axios.get(URL, config);

    return { data: resp.data, error: false };
  } catch (err: any) {
    return { data: err, error: true };
  }
}

async function deleteProductService(productId: string, token: string) {
  console.log("in product delete : ", { productId });
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const resp = await axios.delete(
      `http://127.0.0.1:8000/api/v1/product/${productId}`,
      config
    );

    return { data: resp.data, error: false };
  } catch (err) {
    return { data: err, error: true };
  }
}

async function getCategories() {
  try {
    const resp = await axios.get(
      `http://127.0.0.1:8000/api/v1/product/categories`
    );

    return { data: resp.data, error: false };
  } catch (err) {
    return { data: err, error: true };
  }
}

export {
  createProductService,
  getProductsService,
  deleteProductService,
  updateProductService,
  getCategories,
};
