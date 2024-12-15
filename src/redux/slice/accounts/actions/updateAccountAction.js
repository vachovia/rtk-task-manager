import axios from "axios";
import baseURL from "../../../../utils/baseURL";
import { createAsyncThunk } from "@reduxjs/toolkit";

const updateAccountAction = createAsyncThunk(
  "accounts/update",
  async (payload, { rejectWithValue, getState,  }) => {
    try {
      const state = getState();
      const token = state?.users?.userAuth?.userInfo?.token;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { id, name, accountType, initialBalance, notes } = payload;

      const url = `${baseURL}/accounts/${id}`;

      const body = {
        name,
        notes,
        accountType,
        initialBalance,
      };

      const res = await axios.put(url, body, config);
      return res.data;
    } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default updateAccountAction;
