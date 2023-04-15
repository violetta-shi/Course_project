import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client} from "../api/client";

const initialState = {
    isLoading: false,
    categories: undefined,
    error: null,
}

export const categoriesStateSelector = state => state.categories;

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async () => {
        const response = await client.get("/api/v1/categories");
        return { status: response.status, data: response.data };
    },
    {
        condition: (_, { getState }) => {
            const { categories } = categoriesStateSelector(getState());
            return categories === undefined;
        }
    }

)

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                const { status, data } = action.payload;
                if (status === 200) {
                    state.categories = data;
                } else {
                    state.error = 'Ошибка загрузки. Попробуйте подождать и обновить страницу.'
                }
                state.isLoading = false;
            })
    }
});

export default categoriesSlice.reducer;