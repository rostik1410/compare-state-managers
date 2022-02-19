import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux-toolkit/actions/post-actions';
import { RootState } from '../../redux-toolkit/store'
import PostsList from './PostsList';

const ReduxToolkitWrapper = () => {
    const posts = useSelector((state: RootState) => state.postsReducer.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <PostsList posts={posts} />
    )
}

export default ReduxToolkitWrapper
