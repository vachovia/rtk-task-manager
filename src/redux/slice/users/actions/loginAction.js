import axios from "axios";
import baseURL from "../../../../utils/baseURL";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loginUserAction = createAsyncThunk(
  "users/login",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const url = `${baseURL}/users/login`;
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { email, password } = payload;
      const body = {
        email,
        password,
      };
      const res = await axios.post(url, body, config);
      localStorage.setItem('userInfo', JSON.stringify(res.data));
      return res.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default loginUserAction;
