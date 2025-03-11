import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export interface TAuthUser {
  accessToken: string;
  refreshToken: string;
  user?: {
    name: string;
  };
}

const initialState: TAuthUser = {
  accessToken: "",
  refreshToken: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken: (state, payload) => {
      state.accessToken = payload.payload.accessToken;
      state.refreshToken = payload.payload.refreshToken;
      state.user = payload.payload.user;
    },
    removeToken: (state) => {
      state.accessToken = "";
      state.refreshToken = "";
      state.user = undefined;
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;

export const useSelectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
