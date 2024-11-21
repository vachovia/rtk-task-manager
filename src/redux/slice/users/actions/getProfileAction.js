import axios from "axios";
import baseURL from "../../../../utils/baseURL";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getProfileAction = createAsyncThunk(
  "users/getProfile",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const url = `${baseURL}/users/profile`;
      const state = getState();
      const token = state?.users?.userAuth?.userInfo?.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(url, config);

      return data;
    }
    catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export default getProfileAction;
