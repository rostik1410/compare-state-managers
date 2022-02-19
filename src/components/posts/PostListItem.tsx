import React from 'react'
import { Post } from '../../models/post'

interface PostListItemProps {
    post: Post
}

const PostListItem = ({post}: PostListItemProps) => {
  const handleClick = () => {
    console.log('lox')
  }
  return (
    <tr>
        {Object.keys(post).map(k => <td key={k}>{post[k]}</td>)}
        <button onClick={handleClick}>X</button>
    </tr>
  )
}

export default PostListItem
