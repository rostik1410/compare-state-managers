import { Post, PostCreate } from "../models/post"

class PostsApi {
    async getPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
        return response
    }

    async createPost(data: PostCreate) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'POST', body: JSON.stringify(data)})
        return response
    }

    async updatePost(id: number, data: Post) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'PATCH', body: JSON.stringify(data)})
        return response
    }

    async deletePost(id: number) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'DELETE'})
        return response
    }
}

export default new PostsApi();
