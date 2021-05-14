import '../App.css';
import ButtonComponents from './ButtonComponents';
import PostList from './PostList';
import SelectedPost from './SelectedPost';

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <ButtonComponents/>
      <br></br>
      <PostList/>
      <br></br>
      <SelectedPost/>
    </div>
  );
}

export default App;
