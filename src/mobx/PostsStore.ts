import { makeAutoObservable } from "mobx";
import { PostsApi } from "../api";
import { Post, PostCreate } from "../models/post";

class PostsStore {
    posts: Array<Post> = []
    constructor() {
        makeAutoObservable(this)
    }

    async getPosts () {
        try{
        const response = await PostsApi.getPosts();
        this.posts = await response.json();
        } catch (e){
            console.log(e)
            this.posts = [];
        }
    }

    async createPost(data: PostCreate) {
        try{
            const response = await PostsApi.createPost(data);
            this.posts.push(await response.json());

            this.posts.push({} as Post)
        } catch(e) {
            console.log(e)
        }
    }

    async updatePost(data: Post) {
        try{
            const response = await PostsApi.updatePost(data.id, data);
            const newPost = await response.json()
            this.posts.map(post => {
                if(post.id === newPost.id) return newPost;

                return post;
            });

        }catch (e) {
            console.log(e)
        }
    }

    async deletePost(id: number) {
        try{
            const response = await PostsApi.deletePost(id);
            this.posts.filter(post => post.id === id);

        } catch(e) {
            console.log(e)
        }
    }

}

export default new PostsStore();
