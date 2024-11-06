import { createAsyncThunk } from "@reduxjs/toolkit";

const logoutUserAction = createAsyncThunk("user/logout", () => {
  localStorage.removeItem("userInfo");
  return null;
});

export default logoutUserAction;
