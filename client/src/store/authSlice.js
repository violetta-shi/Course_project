import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client} from "../api/client";

const initialState = {
    currentUserLoaded: false,
    currentUser: null,
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

export const getSelf = createAsyncThunk(
    'auth/getSelf',
    async () => {
        const response = await client.get('/api/v1/users/self', authorizationHeader());
        return response.status === 200 ? response.data : null;
    },
    {
        condition: (_, { getState }) => {
            const { currentUserLoaded } = getState().auth;
            return !currentUserLoaded;
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
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getSelf.fulfilled, (state, action) => {
                state.currentUserLoaded = true;
                state.currentUser = action.payload;
                if (!action.payload) {
                    clearAccessToken();
                }
            })
            .addCase(login.fulfilled, (state, action) => {
                const { status, data } = action.payload;
                if (status === 200) {
                    state.currentUser = data;
                    storeAccessToken(data.access_token);
                } else {
                    state.loginErrorMessage = data?.message || 'login failed';
                }
            })
    }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;