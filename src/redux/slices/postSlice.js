import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Helpers
import { ApiHelperFunction } from "../../services/api/apiHelpers";

let initialState = {
    status: "idle",
    posts: [],
    addPost: {},
    reaction: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
};

//get posts

export const getAllPosts = createAsyncThunk(
    "get_all_posts",
    async () => {
        let response = await ApiHelperFunction({
            urlPath: "/view-all-post",
            method: "POST",
        });
        // console.log("blogs", response);

        if (response?.status === 200) {
            return response?.data;
        } else {
            // toast.error("Can't get data. Something went wrong");
        }
    }
);
//add post
export const addPosts = createAsyncThunk(
    "add_posts",
    async (data) => {
        let response = await ApiHelperFunction({
            urlPath: "/user-add-post",
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

export const PostSlice = createSlice({
    name: "post_actions",
    initialState,
    reducers: {
        clearPostSate: (state) => {
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
            .addCase(getAllPosts.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(getAllPosts.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                // console.log('payload', payload);
                state.posts = payload?.data;
                state.isLoading = false;
            })
            .addCase(getAllPosts.rejected, (state) => {
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
            .addCase(addPosts.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(addPosts.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.addPost = payload
                // toast.success('liked')
                state.isLoading = false;
            })
            .addCase(addPosts.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
                state.isLoading = false;
            });
    },
});

export const { clearPostSate } = PostSlice.actions;

export default PostSlice.reducer;