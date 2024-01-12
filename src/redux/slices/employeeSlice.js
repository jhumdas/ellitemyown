import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
const initialState = {
    status: 'idle',
    isLoading: false,
    isSuccess: false,
    isError: false,
    employee: [],

}


export const getEmployeeData = createAsyncThunk(
    'get_employee_data', async () => {
        let response = await ApiHelperFunction({ urlPath: "/view-all-employees", method: 'GET' })
        if (response?.status) {
            return response?.data;

        } else {
            // toast.error('Error fetching employee data')
        }
    }
);

export const employeeSlice = createSlice({
    name: "employee_actions",
    initialState,
    reducers: {
        clearEmployeeData: (state) => {
            state.status = "idle";
            state.engagement = [];
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getEmployeeData.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(getEmployeeData.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.isLoading = false;
                // console.log('payload', payload);
                state.employee = payload?.data;
            })
            .addCase(getEmployeeData.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
            });
    }

})
export const { clearEmployeeData } = employeeSlice.actions;
export default employeeSlice.reducer;