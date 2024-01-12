import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";

let sustainableState = {
  status: "idle",
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: [],
};

export const getSustainable = createAsyncThunk(
  "get_All_SustainAble",
  async () => {
    let response = await ApiHelperFunction({
      urlPath: "/get-sustainable",
      method: "GET",
    });
    if (response?.status == 200) {
      // console.log("sustainableeeeeeee", response?.data)
      return response?.data;
    } else {
      // toast.error("Can't get data. Something went wrong");
    }
  }
);

export const sustainableSlice = createSlice({
  name: "sustainable_actions",
  initialState: sustainableState,
  reducers: {
    clearHallOfFame: (state) => {
      state.status = "idle";
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSustainable.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(getSustainable.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.isSuccess = true;
        state.data = payload?.data;
      })
      .addCase(getSustainable.rejected, (state) => {
        state.status = "failed";
        state.isError = true;
      });
  },
});
export const { clearSustainable } = sustainableSlice.actions;
export default sustainableSlice.reducer;
