import axios from "axios";
import baseURL from "../../../../utils/baseURL";
import { createAsyncThunk } from "@reduxjs/toolkit";

const createAccountAction = createAsyncThunk(
  "accounts/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const url = `${baseURL}/accounts`;
      const state = getState();
      const token = state?.users?.userAuth?.userInfo?.token;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { name, accountType, initialBalance, notes } = payload;
      const body = {
        name,
        accountType,
        initialBalance,
        notes,
      };
      const res = await axios.post(url, body, config);
      return res.data;
    } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default createAccountAction;
