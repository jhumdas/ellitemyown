import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ApiHelperFunction } from "../../services/api/apiHelpers"
import { toast } from "react-hot-toast"


let hallofFameState = {
    status: "idle",
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: []

}
export const getHallOfFame = createAsyncThunk(
    'get_all_fames', async () => {
        let response = await ApiHelperFunction({
            urlPath: "/get-hallfame",
            method: "GET",
        })
        if (response?.status == 200) {
            // console.log("halllfame", response)
            return response?.data?.data;
        } else {
            // toast.error("Can't get data. Something went wrong");
        }



    }
);

export const HallOfFameSlice = createSlice({
    name: 'hallOfFame_actions',
    initialState: hallofFameState,
    reducers: {
        clearHallOfFame: (state) => {
            state.status = "idle";
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.data = []

        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getHallOfFame.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;


            })
            .addCase(getHallOfFame.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.data = payload
            })
            .addCase(getHallOfFame.rejected, (state) => {
                state.status = "failed";
                state.isError = true;


            })
    }
})
export const { clearHallOfFame } = HallOfFameSlice.actions;
export default HallOfFameSlice.reducer;