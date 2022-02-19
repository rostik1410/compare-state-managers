import { createSlice } from "@reduxjs/toolkit";
import PostCreate from "../../components/posts/PostCreate";

import  { Post } from '../../models/post'
import { getPosts } from "../actions/post-actions";

type initialStateType = {
    posts: Array<Post>
}

const initialState: initialStateType = {
    posts: [],
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        });
        // builder.addCase(createPost.fulfilled, (state, action) => {
        //     state.posts.push(action.payload)
        // });
        // builder.addCase(updatePost, (state, action) => {
        //     state.posts = state.posts.map(post => {
        //         if (post.id === action.payload.id) return action.payload;

        //         return post;
        //     })
        // });
        // builder.addCase(deletePost, (state, action) => {
        //     state.posts = state.posts.filter(post => post.id === action.payload.id)
        // });
    }
})

export default postsSlice.reducer
