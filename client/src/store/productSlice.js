import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client} from "../api/client";

const groupBy = (arr, key) => {
    return arr.reduce((agg, element) => {
        (agg[element[key]] = agg[element[key]] || []).push(element);
        return agg;
    }, {});
};

const initialState = {
    isLoading: false,
    products: {},
    error: null,
}

export const productsStateSelector = state => state.products;

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (categoryId) => {
        const response = await client.get(`/api/v1/categories/${categoryId}/products`);
        return { categoryId, status: response.status, data: response.data };
    },
    {
        condition: (categoryId, { getState }) => {
            const { products } = productsStateSelector(getState());
            return products[categoryId] === undefined;
        }
    }
)

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                const { categoryId, status, data } = action.payload;
                if (status === 200) {
                    state.products[categoryId] = groupBy(data, "groupKey");
                } else {
                    state.error = 'Произошла ошибка, попробуйте позже.'
                }
                state.isLoading = false;
            })
    }
});

export default productsSlice.reducer;