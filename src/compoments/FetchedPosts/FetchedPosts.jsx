import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/actions';
import Loader from '../Loader/Loader';
import Post from '../Post/Post'

const FetchedPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts)
  const loading = useSelector((state) => state.app.loading)



  // if(posts.length === 0){
  //   return <button onClick={()=> dispatch(fetchPosts())} className={`btn btn-primary`}>Загрузить</button>
  // }
  // return posts.map(post => <Post post={post} key={post.id}/>)

  if(loading) {
    return (
      <div className="fetchedPosts">
        <Loader/>
      </div>
    )
  }

  return (

    <div className="fetchedPosts">
      
      {posts.length === 0
    ? <button 
        onClick={()=> dispatch(fetchPosts())} 
        className={`btn btn-primary`}>
          Загрузить
      </button>
    : posts.map(post => <Post post={post} key={post.id}/>)}
    </div>
    
  )
}

export default FetchedPosts
