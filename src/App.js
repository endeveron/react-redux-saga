import FetchedPosts from './components/FetchedPosts/FetchedPosts';
import PostForm from './components/PostForm/PostForm';
import Posts from './components/Posts/Posts';

function App() {
  const posts = [
    // {
    //   id: 1,
    //   title: 'First Post',
    //   text: 'Post 1 Text'
    // },
    // {
    //   id: 2,
    //   text: 'Post 2 Text'
    // },
    // {
    //   id: 3,
    //   text: 'Post 3 Text'
    // }
  ]
  return (
    <div className='container py-4'>
      <div className='row my-4'>
        <div className='col'>
          <PostForm />
        </div>
      </div>
      <div className='row my-4'>
        <div className='col'>
          <h4 className='mb-3'>Sync Posts</h4>
          <Posts posts={ posts } />
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
