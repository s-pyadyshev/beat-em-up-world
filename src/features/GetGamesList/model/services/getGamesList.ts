import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getGamesList = createAsyncThunk("games/getGamesList", async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json"
    );

    if (!response.data) {
      throw new Error();
    }

    // thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    // return thunkAPI.rejectWithValue("error");
  }
});
