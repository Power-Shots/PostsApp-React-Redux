import React from 'react'
import {connect} from 'react-redux'
import Post from '../Post/Post'

const Posts = ({syncPosts}) => {
  console.log(syncPosts)
  if(syncPosts.length === 0){
    return <p>Постов пока нет</p>
  }
  return (
    <div className="posts">
      {syncPosts.map((post) => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
      
    )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    syncPosts: state.posts.posts
  }
}

export default connect(mapStateToProps, null)(Posts)
