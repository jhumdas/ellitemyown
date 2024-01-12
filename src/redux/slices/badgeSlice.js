import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
const initialState = {
    status: 'idle',
    isLoading: false,
    isSuccess: false,
    isError: false,
    badge: [],

}

export const getBadgeData = createAsyncThunk(
    'get_badge_data', async () => {
        let response = await ApiHelperFunction({ urlPath: "/get-badge", method: 'GET' })

        if (response?.status) {
            console.log(response?.data, "responsety")
            return response?.data;

        } else {
            // toast.error('Error fetching badge data')
        }
    }
);

export const badgeSlice = createSlice({
    name: "badge_actions",
    initialState,
    reducers: {
        clearBadgeData: (state) => {
            state.status = "idle";
            state.badge = [];
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBadgeData.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(getBadgeData.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.isLoading = false;
                // console.log('payload', payload);
                state.badge = payload?.data;
            })
            .addCase(getBadgeData.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
            });
    }

})
export const { clearBadgeData } = badgeSlice.actions;
export default badgeSlice.reducer;