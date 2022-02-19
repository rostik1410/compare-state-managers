import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user";

type initialStateType = {
    users: Array<User>
}

const initialState: initialStateType = {
    users: [],
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer
