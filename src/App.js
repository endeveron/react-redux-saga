
import FetchedPosts from './components/post/FetchedPosts/FetchedPosts';
import PostForm from './components/post/PostForm/PostForm';
import Posts from './components/post/Posts/Posts';
import Alert from './components/UI/Alert/Alert';

function App() {

  return (
    <div className='container py-4'>
      <Alert />
      <div className='row my-4'>
        <div className='col'>
          <PostForm />
        </div>
      </div>
      <div className='row my-4'>
        <div className='col'>
          <h4 className='mb-3'>Sync Posts</h4>
          <Posts />
        </div>
        <div className='col'>
          <h4 className='mb-3'>Async Posts</h4>
          <FetchedPosts posts={ [] } />
        </div>
      </div>
    </div>
  );
}

export default App;
