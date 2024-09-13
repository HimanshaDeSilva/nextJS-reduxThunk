const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  }
);
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  }
);
const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: null,
    userProducts: [],
    status: "idle",
    error: null,
    addStatus: "idle",
    addError: null,

    singleProduct: null,
    singleProductStatus: "idle",
    singleProductError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchProductById.pending, (state) => {
        state.singleProductStatus = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.singleProductStatus = "success";
        state.singleProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.singleProductStatus = "error";
      });
  },
});

export default ProductsSlice.reducer;
