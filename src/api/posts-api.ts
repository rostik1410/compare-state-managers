class PostsApi {
    async getPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
        return response
    }

    async createPost() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'POST'})
        return response
    }

    async updatePost(id: number) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'PATCH'})
        return response
    }

    async deletePost(id: number) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'DELETE'})
        return response
    }
}

export default new PostsApi();
