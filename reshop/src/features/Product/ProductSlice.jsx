import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../../constants/Status";
import axios from "axios";

const base_url = "https://fakestoreapi.com/";

const initialState = {
  status: "",
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchedProducts.pending, (status) => {
      status.status = STATUS.LOADING;
    }),
      builder.addCase(fetchedProducts.fulfilled, (status, action) => {
        status.status = STATUS.IDLE;
        status.products = action.payload;
      }),
      builder.addCase(fetchedProducts.rejected, (status) => {
        status.status = STATUS.ERROR;
      });
  },
});

export const fetchedProducts = createAsyncThunk("fetch/products", async () => {
  const data = await axios(`${base_url}products`).then((res) => res.data);
  return data;
});

export default productSlice.reducer;
