import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducers/posts-reducer'


export const store = configureStore({
  reducer: {
    postsReducer: postsReducer,
    // users: usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
