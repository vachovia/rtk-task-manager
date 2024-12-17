import axios from "axios";
import baseURL from "../../../../utils/baseURL";
import { createAsyncThunk } from "@reduxjs/toolkit";

const updateTransactionAction = createAsyncThunk(
  "transactions/update",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { id } = payload;
      const url = `${baseURL}/transactions/${id}`;
      const state = getState();
      const token = state?.users?.userAuth?.userInfo?.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { name, transactionType, amount, category, notes } = payload;

      const body = {
        name,
        transactionType,
        amount,
        category,
        notes,
      };

      const res = await axios.put(url, body, config);
      return res.data;
    } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default updateTransactionAction;
