// import PostForm from "./compoments/PostForm/PostForm";

import FetchedPosts from "./compoments/FetchedPosts/FetchedPosts";
import PostForm from "./compoments/PostForm/PostForm";
import Posts from "./compoments/Posts/Posts";


function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <h2>Список постов</h2>
          <PostForm/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts posts={[]}/>
        </div>

      </div>
    </div>
  );
}

export default App;
