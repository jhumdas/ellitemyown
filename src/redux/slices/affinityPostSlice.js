import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Helpers
import { ApiHelperFunction } from "../../services/api/apiHelpers";

let initialState = {
    status: "idle",
    posts: [],
    addaffinityPost: {},
    reaction: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
};

//get posts

export const getAllAffinityPosts = createAsyncThunk(
    "get_all_affinity_posts",
    async () => {
        let response = await ApiHelperFunction({
            urlPath: "/view-all-affinity-post",
            method: "GET",
        });
        // console.log("blogs", response);

        if (response.status === 200) {
            return response?.data;
        } else {
            // toast.error("Can't get data. Something went wrong");
        }
    }
);
//add post
export const addaffinityPosts = createAsyncThunk(
    "add_affinity_posts",
    async (data) => {
        let response = await ApiHelperFunction({
            urlPath: "/user-add-affinity-post",
            method: "POST",
            data
        });
        // console.log("blogs", response);

        if (response?.status === 200) {
            return response?.data;
        } else {
            toast.error("Can't get data. Something went wrong");
        }
    }
);

//add reaction
export const addReaction = createAsyncThunk(
    'add_post_reaction', async (data) => {
        let response = await ApiHelperFunction({
            urlPath: "/add-reaction",
            method: "POST",
            data
        });
        console.log("responseData", response)
        if (response.status === 200) {
            return response?.data;
        } else {
            toast.error("Can't get data. Something went wrong");
        }

    }
)

export const affinityPostSlice = createSlice({
    name: "affinity_post_actions",
    initialState,
    reducers: {
        clearAffinityPostSate: (state) => {
            state.status = "idle";
            state.posts = [];
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.reaction = {};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllAffinityPosts.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(getAllAffinityPosts.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                // console.log('payload', payload);
                state.posts = payload?.data;
                state.isLoading = false;
            })
            .addCase(getAllAffinityPosts.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
                state.isLoading = false;
            })
            .addCase(addReaction.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(addReaction.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.reaction = payload
                // toast.success('liked')
                state.isLoading = false;
            })
            .addCase(addReaction.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
                state.isLoading = false;
            })
            .addCase(addaffinityPosts.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(addaffinityPosts.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.addaffinityPost = payload
                // toast.success('liked')
                state.isLoading = false;
            })
            .addCase(addaffinityPosts.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
                state.isLoading = false;
            });
    },
});

export const { clearAffinityPostSate } = affinityPostSlice.actions;

export default affinityPostSlice.reducer;