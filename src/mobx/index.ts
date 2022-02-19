import PostsStore from "./PostsStore";
import UsersStore from "./UsersStore";

const store = {
    PostsStore,
    UsersStore
}

export type RootStoreType = typeof store;

export default store;
