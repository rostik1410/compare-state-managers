import React from 'react'
import { Post } from '../../models/post';
import PostsListItem from './PostListItem'

interface PostsListProps {
    posts: Array<Post>,
};


const TableHeaders = [
    'UserId',
    'Id',
    'Title',
    'Body'
]

const PostsList = ({ posts }: PostsListProps) => {
    return (
        <table>
            <thead>
                <tr>{
                    TableHeaders.map(head => <th key={head}>{head}</th>)
                }
                </tr>
            </thead>
            <tbody>
                {posts.map(post => <PostsListItem key={post.id} post={post} />)}
            </tbody>
        </table>
    )
}

export default PostsList;
