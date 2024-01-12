import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
const initialState = {
    status: 'idle',
    isLoading: false,
    isSuccess: false,
    isError: false,
    engagement: [],

}


export const getEngagementData = createAsyncThunk(
    'get_engagements_data', async () => {
        let response = await ApiHelperFunction({ urlPath: "/get-engagement-calender-date", method: 'GET' })
        if (response?.status) {
            return response?.data;

        } else {
            // toast.error('Error fetching bill board data')
        }
    }
);

export const engagementSlice = createSlice({
    name: "engagement_actions",
    initialState,
    reducers: {
        clearEngagementData: (state) => {
            state.status = "idle";
            state.engagement = [];
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getEngagementData.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(getEngagementData.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.isLoading = false;
                // console.log('payload', payload);
                state.engagement = payload?.data;
            })
            .addCase(getEngagementData.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
            });
    }

})
export const { clearEngagementData } = engagementSlice.actions;
export default engagementSlice.reducer;