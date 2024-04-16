import { AppDispatch } from "../store";
import axios from "axios";
import { IGame } from "../../models/IGame";
import { gamesListSlice } from "../../entities/GamesList/model/slice/gamesListSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchGames = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(gamesListSlice.actions.gamesFetching())
//         const response = await axios.get<IGame[]>(
//           "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json"
//         );
//         dispatch(gamesListSlice.actions.gamesFetchingSuccess(response.data))
//     } catch (e) {
//         dispatch(gamesListSlice.actions.gamesFetchingError(e.message))
//     }
// }

export const fetchGames = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IGame[]>(
        "https://raw.githubusercontent.com/s-pyadyshev/beat-em-ups-api/master/db.json"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
