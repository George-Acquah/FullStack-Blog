import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Post/Post';
import Edit from './components/Post/Edit';
import Create from './components/Post/Create';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <div className={'container'}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/post/:postId"} element={<Post />}/>
          <Route path={"/edit/:postId"} element={<Edit />}/>
          <Route path={"/create"} element={<Create />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
