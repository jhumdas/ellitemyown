import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
const initialState = {
    status: 'idle',
    isLoading: false,
    isSuccess: false,
    isError: false,
    trainings: [],

}


export const getTrainingData = createAsyncThunk(
    'get_all_training', async () => {
        let response = await ApiHelperFunction({ urlPath: "/view-all-training", method: 'GET' })
        if (response?.status) {
            return response?.data;

        } else {
            // toast.error('Error fetching bill board data')
        }
    }
);

export const trainingSlice = createSlice({
    name: "traing_actions",
    initialState,
    reducers: {
        clearTrainingData: (state) => {
            state.status = "idle";
            state.trainings = [];
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTrainingData.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(getTrainingData.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.isLoading = false;
                // console.log('payload', payload);
                state.trainings = payload?.data;
            })
            .addCase(getTrainingData.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
            });
    }

})
export const { clearTrainingData } = trainingSlice.actions;
export default trainingSlice.reducer;