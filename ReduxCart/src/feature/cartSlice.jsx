import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await fetch(
    "https://dummyjson.com/products?sortBy=title&order=asc"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
});

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    data: [],
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addCart: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
