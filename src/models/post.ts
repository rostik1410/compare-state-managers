export type Post = {
    [key: string]: number | string,
    userId: number,
    id: number,
    body: string,
    title: string
}


export type PostCreate = Omit<Post, 'id'>
