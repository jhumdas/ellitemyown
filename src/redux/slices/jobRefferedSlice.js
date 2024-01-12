import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
const initialState = {
    status: 'idle',
    isLoading: false,
    isSuccess: false,
    isError: false,
    jobs: [],
}


export const getRefferedJobs = createAsyncThunk(
    'get_jobs_data', async () => {
        let response = await ApiHelperFunction({ urlPath: "/view-all-reffred-job", method: 'GET' })
        if (response?.status) {
            return response?.data;

        } else {
            // toast.error('Error fetching bill board data')
        }
    }
);

export const jobsSlice = createSlice({
    name: "jobs_actions",
    initialState,
    reducers: {
        clearJobData: (state) => {
            state.status = "idle";
            state.jobs = [];
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRefferedJobs.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(getRefferedJobs.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.isLoading = false;
                // console.log('payload', payload);
                state.jobs = payload?.data;
            })
            .addCase(getRefferedJobs.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
            });
    }

})
export const { clearJobData } = jobsSlice.actions;
export default jobsSlice.reducer;