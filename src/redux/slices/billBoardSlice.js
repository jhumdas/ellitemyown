import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
const initialState = {
    status: 'idle',
    isLoading: false,
    isSuccess: false,
    isError: false,
    billBoardData: [],

}


export const getBillBoardData = createAsyncThunk(
    'get_bill_board', async () => {
        let response = await ApiHelperFunction({ urlPath: "/view-all-bulletin-board", method: 'GET' })
        if (response?.status) {
            return response?.data;

        } else {
            // toast.error('Error fetching bill board data')
        }
    }
);

export const billBoardSlice = createSlice({
    name: "billBoard_actions",
    initialState,
    reducers: {
        clearBillBoardData: (state) => {
            state.status = "idle";
            state.billBoardData = [];
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBillBoardData.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(getBillBoardData.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.isLoading = false;
                // console.log('payload', payload);
                state.billBoardData = payload?.data;
            })
            .addCase(getBillBoardData.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
            });
    }

})
export const { clearBillBoardData } = billBoardSlice.actions;
export default billBoardSlice.reducer;