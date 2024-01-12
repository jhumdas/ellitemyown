import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
const initialState = {
    status: 'idle',
    isLoading: false,
    isSuccess: false,
    isError: false,
    event: [],

}


export const getEventData = createAsyncThunk(
    'get_event_data', async () => {
        let response = await ApiHelperFunction({ urlPath: "/view-event", method: 'GET' })
        if (response?.status) {
            return response?.data;

        } else {
            // toast.error('Error fetching employee data')
        }
    }
);

export const eventSlice = createSlice({
    name: "event_actions",
    initialState,
    reducers: {
        clearEventData: (state) => {
            state.status = "idle";
            state.event = [];
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getEventData.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(getEventData.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.isLoading = false;
                // console.log('payload', payload);
                state.event = payload?.data;
            })
            .addCase(getEventData.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
            });
    }

})
export const { clearEventData } = eventSlice.actions;
export default eventSlice.reducer;