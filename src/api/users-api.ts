class UsersApi {
    async getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
        return response
    }

    async createUser() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {method: 'POST'})
        return response
    }

    async updateUser(id: number) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {method: 'PATCH'})
        return response
    }

    async deleteUser(id: number) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {method: 'DELETE'})
        return response
    }
}

export default new UsersApi();
