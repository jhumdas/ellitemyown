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

export const getAdvocacyPosts = createAsyncThunk(
    "get_all_posts_aaaa",
    async () => {
        let response = await ApiHelperFunction({
            urlPath: "/view-advocacy",
            method: "GET",
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
export const addAdvocacyPosts = createAsyncThunk(
    "add_posts_ddd",
    async (data) => {
        let response = await ApiHelperFunction({
            urlPath: "/add-advocacy",
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
        if (response?.status === 200) {
            return response?.data;
        } else {
            toast.error("Can't get data. Something went wrong");
        }
    }
)

export const AdvocacyPostSlice = createSlice({
    name: "post_actions",
    initialState,
    reducers: {
        clearAdvocacySate: (state) => {
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
            .addCase(getAdvocacyPosts.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(getAdvocacyPosts.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                // console.log('payload', payload);
                state.posts = payload.data;
                state.isLoading = false;
            })
            .addCase(getAdvocacyPosts.rejected, (state) => {
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
            .addCase(addAdvocacyPosts.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(addAdvocacyPosts.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.isSuccess = true;
                state.addPost = payload
                // toast.success('liked')
                state.isLoading = false;
            })
            .addCase(addAdvocacyPosts.rejected, (state) => {
                state.status = "failed";
                state.isError = true;
                state.isSuccess = false;
                state.isLoading = false;
            });
    },
});

export const { clearAdvocacySate } = AdvocacyPostSlice.actions;

export default AdvocacyPostSlice.reducer;