import { IcreateOrderData } from "@/interface/orderService";
import axios from "axios";

async function createOrderService(formData: IcreateOrderData, token: string) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const resp = await axios.post(
      "http://127.0.0.1:8000/api/v1/order",
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

export { createOrderService };
