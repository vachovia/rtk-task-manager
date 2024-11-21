import axios from "axios";
import baseURL from "../../../../utils/baseURL";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getSingleAccountAction = createAsyncThunk(
  "accounts/details",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const url = `${baseURL}/accounts/${id}`;
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

export default getSingleAccountAction;
