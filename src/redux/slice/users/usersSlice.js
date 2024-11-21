import { createSlice } from "@reduxjs/toolkit";
import {
  registerUserAction,
  loginUserAction,
  logoutUserAction,
  getProfileAction,
} from "./actions";

const jsonTryParse = function (jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return null;
  }
};

const userInfoRaw = localStorage.getItem("userInfo");
const userInfo = jsonTryParse(userInfoRaw);

const initialState = {
  loading: false,
  error: null,
  users: [],
  user: {},
  profile: {},
  userAuth: {
    loading: false,
    error: null,
    userInfo: userInfo,
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userDummyAction: (state, action) => { },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userAuth.userInfo = action.payload;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.loading = false;
      state.userAuth.error = action.payload;
    });
    // Login
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userAuth.userInfo = action.payload;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.loading = false;
      state.userAuth.error = action.payload;
    });
    // Get Profile
    builder.addCase(getProfileAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProfileAction.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    });
    builder.addCase(getProfileAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.profile = {};
    });
    // LogOut
    builder.addCase(logoutUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.profile = {};
      state.userAuth.userInfo = null;
    });
  },
});

const usersReducer = usersSlice.reducer;

export const { userDummyAction } = usersSlice.actions;

export default usersReducer;
