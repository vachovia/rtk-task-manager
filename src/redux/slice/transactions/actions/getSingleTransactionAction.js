import axios from "axios";
import baseURL from "../../../../utils/baseURL";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getSingleTransactionAction = createAsyncThunk(
  "transactions/getSingleTransaction",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const {id} = payload;
      const url = `${baseURL}/transactions/${id}`;
      const state = getState();
      const token = state?.users?.userAuth?.userInfo?.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.get(url, config);
      return res.data;
    } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default getSingleTransactionAction;
