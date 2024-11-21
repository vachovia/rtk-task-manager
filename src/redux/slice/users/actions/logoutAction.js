import { createAsyncThunk } from "@reduxjs/toolkit";

const logoutUserAction = createAsyncThunk("users/logout", () => {
  localStorage.removeItem("userInfo");
  return null;
});

export default logoutUserAction;
