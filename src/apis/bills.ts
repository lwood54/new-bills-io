import axios from "axios";
import { Bill } from "../pages/Bills/types";
import { apiRoot } from "./constants";

export const getBills = (userId: string) => {
  return axios.get(`${apiRoot}/api/user/${userId}/bills`);
};

export const removeBill = (userId: string, billId: string) => {
  return axios.delete(`${apiRoot}/api/user/${userId}/remove-bill`, {
    data: { id: billId },
  });
};

export const addBill = (userId: string, payload: Bill) => {
  return axios.put(`${apiRoot}/api/user/${userId}/add-bill`, payload);
};
