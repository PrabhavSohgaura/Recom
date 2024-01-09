import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../../constants/Status";
import axios from "axios";

const base_url = "https://fakestoreapi.com/";

const initialState = {
  status: "",
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("pending", (status) => {
      status.status = STATUS.LOADING;
    }),
      builder.addCase("fullfilled", (status, action) => {
        status.status = STATUS.IDLE;
        status.products = action.payload;
      }),
      builder.addCase("error", (status) => {
        status.status = STATUS.ERROR;
      });
  },
});

export const fetchedProducts = createAsyncThunk("fetch/product", async () => {
  const data = await axios(`${base_url}products`).then((res) => res.data);
  return data;
});
