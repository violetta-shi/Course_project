import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client} from "../api/client";

const initialState = {
    isLoading: false,
    currentUser: undefined,
    loginErrorMessage: null
}

const ACCESS_TOKEN_KEY = 'access-token';
const getAccessToken = () => {
    return window.localStorage.getItem(ACCESS_TOKEN_KEY);
}
const storeAccessToken = (value) => {
    return window.localStorage.setItem(ACCESS_TOKEN_KEY, value);
}
const clearAccessToken = () => {
    window.localStorage.removeItem(ACCESS_TOKEN_KEY);
}
const authorizationHeader = () => {
    const accessToken = getAccessToken();
    return accessToken ? { 'Authorization': `Bearer ${accessToken}` } : {};
}

export const authStateSelector = state => state.auth;

export const getSelf = createAsyncThunk(
    'auth/getSelf',
    async () => {
        const response = await client.get('/api/v1/users/self', authorizationHeader());
        return response.status === 200 ? response.data : null;
    },
    {
        condition: (_, { getState }) => {
            const { currentUser } = authStateSelector(getState());
            return currentUser === undefined;
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (body) => {
        const response = await client.post('/api/v1/auth/login', body);
        return { status: response.status, data: response.data };
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            clearAccessToken();
            state.currentUser = null;
        },
        dismissErrorMessage: (state) => {
            state.loginErrorMessage = null;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getSelf.fulfilled, (state, action) => {
                state.currentUser = action.payload || null;
                if (!action.payload) {
                    clearAccessToken();
                }
            })
            .addCase(login.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                const { status, data } = action.payload;
                if (status === 200) {
                    state.currentUser = data;
                    storeAccessToken(data.access_token);
                } else {
                    state.loginErrorMessage = data?.message || 'Не удалось выполнить логин';
                }
                state.isLoading = false;
            })
    }
});

export const { logout, dismissErrorMessage } = authSlice.actions;

export default authSlice.reducer;