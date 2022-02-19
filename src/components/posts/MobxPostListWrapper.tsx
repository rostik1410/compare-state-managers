import { observer } from 'mobx-react-lite'
import React from 'react'

import type { RootStoreType } from '../../mobx'
import PostsStore from '../../mobx/PostsStore'
import PostsList from './PostsList'


const MobxPostListWrapper = () => {
    const store ={} as typeof PostsStore;
    console.log('store', store)
    const { posts } = store;
    React.useEffect(() => {
        store!.getPosts()
    }, []);
    return (
        <PostsList posts={posts} />
    )
}

export default observer(MobxPostListWrapper)
