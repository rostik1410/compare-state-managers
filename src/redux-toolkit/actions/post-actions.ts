import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostsApi } from "../../api";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const response = await PostsApi.getPosts();
        return await response.json()
    }
)
