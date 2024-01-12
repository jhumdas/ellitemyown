import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
const initialState = {
    status: 'idle',
    isLoading: false,
    isSuccess: false,
    isError: false,
    groups: [],
    myGroups: []

}


export const getAffinityGroups = createAsyncThunk(
    'get_affinity_data', async () => {
        let response = await ApiHelperFunction({ urlPath: "/view-affinity-group", method: 'GET' })
        if (response?.status) {
            return response?.data;

        } else {
            // toast.error('Error fetching bill board data')
        }
    }
);

export const getMyAffinityGroups = createAsyncThunk(
    'get_my_affinity_data', async () => {
        let response = await ApiHelperFunction({ urlPath: "/view-my-affinity-group", method: 'GET' })
        if (response?.status) {
            return response?.data;

        } else {
            // toast.error('Error fetching bill board data')
        }
    }
);

export const affinitySlice = createSlice({
    name: "engagement_actions",
    initialState,
    reducers: {
        clearAffinityData: (state) => {
            state.status = "idle";
            state.groups = [];
            state.myGroups = [];
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAffinityGroups.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(getAffinityGroups.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.isLoading = false;
                // console.log('payload', payload);
                state.groups = payload?.data;
            })
            .addCase(getAffinityGroups.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
            })




            .addCase(getMyAffinityGroups.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(getMyAffinityGroups.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.isLoading = false;
                // console.log('payload', payload);
                state.myGroups = payload?.data;
            })
            .addCase(getMyAffinityGroups.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
            });
    }

})
export const { clearAffinityData } = affinitySlice.actions;
export default affinitySlice.reducer;