import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";

let initiativeState = {
    status: "idle",
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: [],
};

export const getInitiative = createAsyncThunk(
    "get_All_Initiative",
    async () => {
        let response = await ApiHelperFunction({
            urlPath: "/view-all-initiative",
            method: "GET",
        });
        if (response?.status == 200) {
            // console.log("initiativeeeeeeeee", response?.data)
            return response?.data;
        } else {
            // toast.error("Can't get data. Something went wrong");
        }
    }
);

export const initiativeSlice = createSlice({
    name: "initiative_actions",
    initialState: initiativeState,
    reducers: {
        clearInitiative: (state) => {
            state.status = "idle";
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.data = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getInitiative.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(getInitiative.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.data = payload?.data;
            })
            .addCase(getInitiative.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
            });
    },
});
export const { clearInitiative } = initiativeSlice.actions;
export default initiativeSlice.reducer;
